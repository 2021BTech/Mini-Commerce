import { Component } from '@angular/core';
import { selectCartItems, selectCartTotal } from '../../../cart/state/cart.selectors';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../cart/state/cart.actions';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal);

  constructor(private store: Store, private router: Router) {}

placeOrder() {
  this.total$.pipe(take(1)).subscribe(total => {
    const orderId = Math.random().toString(36).substring(2, 10).toUpperCase();
    this.store.dispatch(CartActions.clearCart());
    this.router.navigate(['/success'], {
      queryParams: { orderId, total }
    });
  });
}

  navigateTo(path: string) {
  this.router.navigate([path]);
}

}
