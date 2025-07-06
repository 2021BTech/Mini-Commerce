import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

    private _toast$ = new BehaviorSubject<Toast | null>(null);
  toast$ = this._toast$.asObservable();

  show(toast: Toast) {
    this._toast$.next(toast);
    setTimeout(() => this.clear(), toast.duration ?? 3000);
  }

  clear() {
    this._toast$.next(null);
  }
}
