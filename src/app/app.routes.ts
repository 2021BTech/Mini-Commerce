import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CheckoutComponent } from './features/checkout/components/checkout/checkout.component';
import { SuccessComponent } from './features/checkout/components/success/success.component';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' },
];
