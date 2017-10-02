import { Subscription } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from 'app/counter/counter.component';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter using ngrx';
  counter: number;
  counterSub: Subscription;

  constructor(private store: Store<AppState>) {
    this.counterSub = store.select('counter').subscribe(n => this.counter = n);
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET, payload: this.counter });
  }
}


