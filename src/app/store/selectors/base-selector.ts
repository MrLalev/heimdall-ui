import { AppState } from '../../app.state';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';

export const getStateSnapshot = (store: Store<AppState>, selector: string): any => {
    let state: AppState;
    store.pipe(select(selector), take(1)).subscribe(s => state = s);
    return state;
};
