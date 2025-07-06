import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { StorageService } from './core/services/storage.service';
import { CartItem } from './features/cart/models/cart-item.model';
import { CartActions } from './features/cart/state/cart.actions';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mini-commerce';

  constructor(private store: Store, private storage: StorageService) {
    const storedItems =
      this.storage.getItem<CartItem[]>('mini-commerce-cart') || [];
    this.store.dispatch(
      CartActions.loadCartFromStorage({ items: storedItems })
    );
  }
}
