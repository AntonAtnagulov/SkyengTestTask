import React, { useEffect } from "react";
import axios from "axios";
import ItemCard from "../../components/ItemCard/ItemCard";
import style from "./main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/itemSlice";

export default function Main() {
    const items = useSelector((state) => state.items.allItems);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:3100/items/", {
                withCredentials: true,
            });
            dispatch(getAllItems(res.data));
        })();
    }, []);

    const sortHandler = (e) => {
        dispatch(
            getAllItems(
                [...items].sort((a, b) =>
                    e.target.value === "low"
                        ? a.price - b.price
                        : b.price - a.price
                )
            )
        );
    };

    return (
        <div className={style.mainContainer}>
            <select className={style.priceSort} onChange={sortHandler}>
                <option value="low">Сперва дешевле</option>
                <option value="high">Сперва дороже</option>
            </select>
            <div className={style.container}>
                {items?.map((el) => (
                    <ItemCard key={el.id} item={el} />
                ))}
            </div>
        </div>
    );
}
