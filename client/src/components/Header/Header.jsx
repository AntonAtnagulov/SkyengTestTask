import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./header.module.scss";

export default function Header() {
    const basket = useSelector((state) => state.items.basket);
    
    return (
        <div className={style.headerBox}>
            <div>
                <h1>Интерьер</h1>
            </div>
            <div className={style.rightContainer}>
                <div className={style.badge}>{basket.length}</div>
                <Link to="/">
                    <h5>Каталог</h5>
                </Link>
                <Link to="/basket">
                    <h5>Корзина</h5>
                </Link>
            </div>
        </div>
    );
}
