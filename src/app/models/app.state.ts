import { Stock } from "./stock.model";

export interface AppState {
    stocks: ReadonlyArray<Stock>;
}
