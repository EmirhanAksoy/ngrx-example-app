import { AppState } from 'src/app/models/app.state';

export const selectStockList = (state: AppState) => state.stocks;
