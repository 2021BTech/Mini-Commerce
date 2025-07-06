import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Store } from '@ngrx/store';
import { CartActions } from '../../state/cart.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private store: Store) {}

  increase() {
    this.store.dispatch(
      CartActions.updateItemQuantity({ productId: this.item.productId, quantity: this.item.quantity + 1 })
    );
  }

  decrease() {
    const qty = this.item.quantity - 1;
    if (qty > 0) {
      this.store.dispatch(
        CartActions.updateItemQuantity({ productId: this.item.productId, quantity: qty })
      );
    } else {
      this.remove();
    }
  }

  remove() {
    this.store.dispatch(
      CartActions.removeItem({ productId: this.item.productId })
    );
  }


}
