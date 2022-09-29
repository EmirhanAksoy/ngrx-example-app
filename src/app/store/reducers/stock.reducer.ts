import { createReducer, on } from '@ngrx/store';
import { Stock } from 'src/app/models/stock.model';
import { addStock, removeStock } from '../actions/stock.action';


export const initialStockStore: ReadonlyArray<Stock> = [];

export const stocksReducer = createReducer(
    initialStockStore,
    on(addStock, (state, { stock }) => [...state, stock]),
    on(removeStock, (state, { stockId }) => state.filter(x => x.id !== stockId))
);