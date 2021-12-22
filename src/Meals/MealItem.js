import { useContext } from 'react';
import classes from '../Meals/MealItem.module.css';
import CartContext from '../store/cart-context';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addTocartHandler = (qty) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: qty,
            price: props.price
        });
    }

    const price = `$${props.price}`;
    return <li className={classes.meal}>
        <div>
            <h1>{props.name}</h1>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addTocartHandler} />
        </div>
    </li>

}
export default MealItem;