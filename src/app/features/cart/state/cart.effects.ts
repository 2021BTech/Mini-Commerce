
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { CartActions } from './cart.actions';
import { StorageService } from '../../../core/services/storage.service';
import { selectCartItems } from './cart.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class CartEffects {
  persistCart$ = createEffect(() => 
    this.actions$.pipe(
      ofType(
        CartActions.addItem,
        CartActions.removeItem,
        CartActions.updateItemQuantity,
        CartActions.clearCart
      ),
      tap(() => {
        const items = this.store.selectSignal(selectCartItems)();
        this.storage.setItem('mini-commerce-cart', items);
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private storage: StorageService,
    private store: Store
  ) {}
}