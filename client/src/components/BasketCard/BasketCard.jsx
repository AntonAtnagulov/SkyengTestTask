import axios from 'axios';
import { delFromBasket } from '../../redux/itemSlice';
import { useDispatch } from 'react-redux';
import Count from '../Count/Count';
import style from './basketCard.module.scss';

export default function BasketCard({ item }) {
    const dispatch = useDispatch();

    const delHandler = async () => {
        const res = await axios.delete(`http://localhost:3100/cart/${item.id}`);
        if (res.status === 200) {
            dispatch(delFromBasket(item));
        }
    };

    return (
        <div className={style.cardBox}>
            <img className={style.image} src={item.img} />
            <div>
                <div className={style.textContainer}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <div className={style.optionBtnBox}>
                    <span className={style.optionBtn}>В избранное</span>
                    <span onClick={delHandler} className={style.optionBtn}>Удалить</span>
                </div>
            </div>
            <div>
                <Count item={item} />
            </div>
        </div>
    );
}
