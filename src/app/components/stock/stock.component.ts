import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock.model';
import { Store } from '@ngrx/store';
import { selectStockList } from '../../store/selectors/stock.selector';
import { AppState } from 'src/app/models/app.state';
import { addStock, removeStock } from 'src/app/store/actions/stock.action';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  selectStock = this.store.select(selectStockList);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addStock(): void {
    const id = Math.floor(Math.random() * (200 - 0 + 1) + 0)
    const newStock: Stock = {
      id,
      name: `Stock ${id}`
    }
    this.store.dispatch(addStock({ stock: newStock }));

  }

  removeStock(stockId: number) {
    this.store.dispatch(removeStock({ stockId: stockId }));
  }

}
