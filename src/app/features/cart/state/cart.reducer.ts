import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';
import { CartItem } from '../models/cart-item.model';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
    console.log('Reducer addItem called with:', item);
    const existingItem = state.items.find(
      (i) => i.productId === item.productId
    );
    if (existingItem) {
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
      };
    }
    return { ...state, items: [...state.items, item] };
  }),

  on(CartActions.removeItem, (state, { productId }) => {
    return {
      ...state,
      items: state.items.filter((item) => item.productId !== productId),
    };
  }),

  on(CartActions.loadCartFromStorage, (state, { items }) => ({
    ...state,
    items,
  })),

  on(CartActions.updateItemQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map((i) =>
      i.productId === productId ? { ...i, quantity } : i
    ),
  })),

  on(CartActions.clearCart, (state) => ({
    ...state,
    items: [],
  }))
);
