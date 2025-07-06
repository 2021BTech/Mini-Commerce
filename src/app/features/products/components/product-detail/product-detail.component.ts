import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { CartActions } from '../../../cart/state/cart.actions';
import { Product } from '../../models/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store,
    private location: Location
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.productService.getProductBySlug(slug).subscribe((product) => {
        this.product = product;
      });
    }
  }

  addToCart() {
    if (!this.product) return;

    const { id, name, price, imageUrl } = this.product;

    this.store.dispatch(
      CartActions.addItem({
        item: {
          productId: id,
          name,
          price,
          imageUrl,
          quantity: 1,
        },
      })
    );
  }

  goBack() {
    this.location.back();
  }
}
