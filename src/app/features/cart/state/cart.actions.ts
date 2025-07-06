import { createActionGroup, emptyProps, props, createAction } from '@ngrx/store';
import { CartItem } from '../models/cart-item.model';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Item': props<{ item: CartItem }>(),
    'Remove Item': props<{ productId: string }>(),
    'Update Item Quantity': props<{ productId: string; quantity: number }>(),
    'Clear Cart':  emptyProps() ,
    'Load Cart From Storage': props<{ items: CartItem[] }>(), 
  }
});

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);
