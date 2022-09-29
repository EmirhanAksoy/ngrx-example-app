import { createAction, props } from '@ngrx/store';
import { Stock } from 'src/app/models/stock.model';

export const addStock = createAction(
    '[Stock List] Add Stock',
    props<{ stock: Stock }>()
);


export const removeStock = createAction(
    '[Stock Collection] Remove Stock',
    props<{ stockId: number }>()
);