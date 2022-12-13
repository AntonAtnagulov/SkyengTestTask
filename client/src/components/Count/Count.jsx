import { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../../redux/itemSlice";
import style from "./count.module.scss";

export default function Count({ item }) {
    const [inputValue, setInputValue] = useState("1");
    const dispatch = useDispatch();

    const sumHandler = (e) => {
        setInputValue(e.target.value);
        dispatch(calculateTotal({ count: e.target.value, item: item }));
    };

    return (
        <div>
            <input
                className={style.count}
                onChange={sumHandler}
                type="number"
                name="tentacles"
                min="1"
                value={inputValue}
                max={item.count}
            />
        </div>
    );
}
