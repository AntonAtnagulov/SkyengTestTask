import React from 'react';
import style from './cartEmpty.module.scss';

export default function CartEmpty() {
    return (
        <div className={style.box}>
            <h2>В корзине ничего нет</h2>
        </div>
    );
}
