import { Injectable } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly PRODUCTS_KEY = 'mini-commerce-products';

  constructor(private http: HttpClient, private storage: StorageService) {}

  getProducts(): Observable<Product[]> {
    const storedProducts = this.storage.getItem<Product[]>(this.PRODUCTS_KEY);
    if (storedProducts) {
      console.log('Loaded from localStorage:', storedProducts);
      return of(storedProducts);
    }

    return this.http.get<Product[]>('/assets/products.json').pipe(
      tap((products) => {
        console.log('Fetched from JSON file:', products);
        this.storage.setItem(this.PRODUCTS_KEY, products);
      })
    );
  }

  getProductBySlug(slug: string): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((p) => p.slug === slug))
    );
  }
}
