import axios from 'axios';
import style from './itemCard.module.scss';
import { priceParser } from '../../lib/functions';
import { addOneToCart } from "../../redux/itemSlice";
import { useDispatch } from 'react-redux';

export default function ItemCard({ item }) {
    const dispatch = useDispatch()
    
    const addToCartHandler = async () => {
        const res = await axios.post('http://localhost:3100/add', item, {
            withCredentials: true,
        });
        dispatch(addOneToCart(res.data))
    };

    return (
        <div className={style.cardContainer}>
            <img width="350px" src={item.img} />
            <div onClick={addToCartHandler} className={style.cartIcon}>
                <img width='40px' src="./cart.png" />
            </div>
            <div className={style.textContainer}>
                <h3>{item.name}</h3>
                <p className={style.descriptionBox}>{item.description}</p>
                <h3>{priceParser(item.price)}</h3>
            </div>
        </div>
    );
}
