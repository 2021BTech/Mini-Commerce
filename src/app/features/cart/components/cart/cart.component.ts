import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { selectCartItems, selectCartTotal } from '../../state/cart.selectors';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal);

  constructor(private store: Store, private router: Router) {}

    navigateTo(path: string) {
  this.router.navigate([path]);
}
}
