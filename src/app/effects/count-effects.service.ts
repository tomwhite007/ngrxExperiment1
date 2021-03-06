import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';

export interface Action {
  type: string;
  payload?: any;
}

// // https://github.com/ngrx/platform/issues/128#issuecomment-316680916
// export interface ActionWithPayload<T> extends Action {
//   payload: T;
// }


@Injectable()
export class CountEffects {
  // Listen for the 'RESET' action
  @Effect() reset$: Observable<Action> = this.actions$.ofType('RESET')
    .mergeMap((action: Action) => {
      console.log('inside CountEffects');
      console.log('Counter value before reset: ', action.payload);
      return of({ type: 'RESETTED', payload: 'ha!' });
    }
  );

  // Listen for the 'RESETTED' action
  @Effect() resetted$: Observable<Action> = this.actions$.ofType('RESETTED')
    .mergeMap((action: Action) => {
      console.log(action.payload, 'Counter has been resetted!');
      return of({ type: 'AFTER-RESETTED', payload: action.payload });
    }
  );

  constructor(
    private http: Http,
    private actions$: Actions,
    private store: Store<any>
  ) {}
}






