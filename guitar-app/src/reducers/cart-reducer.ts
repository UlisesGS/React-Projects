import { db } from "../data/db";
import { CartItem, Guitar } from "../types/types";

export type CartActions =
{ type: 'add-to-cart', payload: {item:Guitar}} |
{ type: 'remove-from-cart', payload: {item:Guitar}} | 
{ type: 'decrement-cart-item', payload: {item:Guitar}} |
{ type: 'increment-cart-item', payload: {item:Guitar}} |
{ type: 'clear-cart'}

export type CartState = {
    data: Guitar[],
    cart: CartItem[]
}

export const initialState: CartState = {
    data: db,
    cart: []
}


const MAX_ITEMS = 15;
const MIN_ITEMS = 1;

export const cartReducer = (
    state: CartState, 
    action: CartActions
) => {

    if(action.type === 'add-to-cart') {

        const itemExists = state.cart.find(guitar => guitar.id == action.payload.item.id);

        let updatedCart : CartItem[] = [];

        if (itemExists) {
            updatedCart = state.cart.map((item) => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < MAX_ITEMS) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    } else {
                        return item;
                    }
                }else {
                    return item;
                }
            })
        } else {
            const newItem : CartItem = {...action.payload.item, quantity: 1}
            updatedCart = [...state.cart, newItem];
        }

        return{
            ...state,
            cart: updatedCart
        }
    }

    if(action.type === 'remove-from-cart') {
        return{
            ...state
        }
    }

    if(action.type === 'decrement-cart-item') {
        return{
            ...state
        }
    }

    if(action.type === 'increment-cart-item') {
        return{
            ...state
        }
    }

    if(action.type === 'clear-cart') {
        return{
            ...state
        }
    }
}