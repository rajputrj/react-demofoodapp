import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import classes from '../Layouts/HeaderCartButton.module.css';
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnEffect, setBtnEffect] = useState(false);
    const cartCtx = useContext(CartContext);
    const noOfCartCount = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    let BtnClasses = `${classes.button} ${btnEffect ? classes.bump : ''}`;
    const { items } = cartCtx;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnEffect(true);

        const timer = setTimeout(() => {
            setBtnEffect(false);
        }, 300);

        return ()=>{
        clearTimeout(timer);
        };

    }, [items]);


    return (
        <button className={BtnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noOfCartCount}</span>
        </button>
    );
}

export default HeaderCartButton;