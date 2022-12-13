import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'itemSlice',
    initialState: {
        totalSum: {},
        allItems: [],
        basket: [],
    },
    reducers: {
        getAllItems(state, action) {
            state.allItems = action.payload;
        },
        addToBasket(state, { payload }) {
            state.basket = payload;
            state.basket.forEach((el) => {
                state.totalSum[el.id] = el.price;
            });
        },
        addOneToCart(state, { payload }) {
            state.basket.push(payload);
        },
        delFromBasket(state, { payload }) {
            state.basket = state.basket.filter((el) => +el.id !== +payload.id);
            delete state.totalSum[payload.id];
        },
        calculateTotal(state, { payload }) {
            const id = payload.item.id;
            state.totalSum = {
                ...state.totalSum,
                [id]: payload.item.price * payload.count,
            };
        },
        setSum(state, { payload }) {
            console.log(payload);
            state.totalSum = payload;
        },
    },
});

export default itemSlice.reducer;
export const {
    getAllItems,
    addToBasket,
    delFromBasket,
    calculateTotal,
    setSum,
    addOneToCart,
} = itemSlice.actions;
