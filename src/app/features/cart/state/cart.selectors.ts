import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../models/cart-item.model';

// 1. Select the entire cart feature state
export const selectCartState = createFeatureSelector<CartState>('cart');

// 2. Select just the items
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

// 3. Select total item count
export const selectCartTotalItems = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);

// 4. Select cart total price (assuming `item.price` exists)
export const selectCartTotalPrice = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total + item.price * item.quantity, 0)
);


export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
);