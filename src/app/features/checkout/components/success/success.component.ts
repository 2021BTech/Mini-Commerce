import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { selectCartItems } from '../../../cart/state/cart.selectors';
import { selectCartTotalPrice } from '../../../cart/state/cart.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
   orderId: string | null = '';
   total: string | null = '';
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotalPrice);

  constructor(private route: ActivatedRoute, private store: Store) {
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
    this.total = this.route.snapshot.queryParamMap.get('total');
  }
}
