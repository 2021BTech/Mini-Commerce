import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../cart/state/cart.actions';
import { selectCartItems } from '../../../cart/state/cart.selectors';
import { Router, RouterLink } from '@angular/router';
import { CartItem } from '../../../cart/models/cart-item.model';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products$ = this.productService.getProducts();
  cart$ = this.store.select(selectCartItems);
  cartVisible = false;

  constructor(
    private productService: ProductService,
    private store: Store,
    private router: Router,
    private toast: ToastService
  ) {}

  handleAddToCart(product: Product) {
    this.store.dispatch(
      CartActions.addItem({
        item: {
          productId: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
        },
      })
    );
    this.toast.show({
      type: 'success',
      message: `"${product.name}" added to cart`,
      duration: 3000,
    });
  }

  getCartTotal(cart: CartItem[]): number {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  toggleCartDropdown() {
    this.cartVisible = !this.cartVisible;
  }

  goToCheckout() {
    this.cartVisible = false;
    this.router.navigate(['/cart']);
  }
}
