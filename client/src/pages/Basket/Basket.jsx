import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../../components/BasketCard/BasketCard';
import Btn from '../../components/Btn/Btn';
import CartEmpty from '../../components/CartEmpty/cartEmpty';
import { priceParser } from '../../lib/functions';
import { addToBasket } from '../../redux/itemSlice';
import style from './basket.module.scss';

export default function Basket() {
    const basket = useSelector((state) => state.items.basket);
    const totalSum = useSelector((state) => state.items.totalSum);
    const dispatch = useDispatch();

    let totalSumValue = priceParser(
        Object.values(totalSum).reduce((acc, val) => acc + val, 0)
    );

    useEffect(() => {
        (async () => {
            const res = await axios.get('http://localhost:3100/cart');
            dispatch(addToBasket(res.data));
        })();
    }, []);

    return (
        <div className={style.mainContainer}>
            <div>
                {basket.length ? (
                    <>
                        <div>
                            {basket?.map((el) => (
                                <BasketCard item={el} />
                            ))}
                        </div>
                        <div className={style.btnContainer}>
                            <Btn name="Очистить корзину" color="#ffffff00" />
                            <Btn name="Продолжить покупки" color="#888888" />
                        </div>
                    </>
                ) : (
                    <CartEmpty />
                )}
            </div>
            <div className={style.infoContainer}>
                <h2>Оформление заказа</h2>
                <form className={style.inputForm}>
                    <input
                        className={style.textInput}
                        type="text"
                        placeholder="Имя Фамилия"
                    />
                    <input
                        className={style.textInput}
                        type="text"
                        placeholder="+7"
                    />
                    <input
                        className={style.textInput}
                        type="text"
                        placeholder="Адрес доставки"
                    />
                </form>
                <div>
                    <p className={style.totalSum}>Итого: {totalSumValue}</p>
                </div>
                <div className={style.orderBtn}>
                    <span>Оформить заказ</span>
                </div>
            </div>
        </div>
    );
}
