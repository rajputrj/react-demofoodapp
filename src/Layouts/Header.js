import { Fragment } from "react";
import classes from '../Layouts/Header.module.css';
import mealImage from '../assets/img/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton  onClick={props.openCartModal}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="react meal app" />
            </div>
        </Fragment>
    );
}
export default Header;