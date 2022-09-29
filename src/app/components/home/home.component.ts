import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app.state';
import { removeStock } from 'src/app/store/actions/stock.action';
import { selectStockList } from 'src/app/store/selectors/stock.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectStock = this.store.select(selectStockList);
  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
  }

  removeStock(stockId: number) {
    this.store.dispatch(removeStock({ stockId: stockId }));
  }

}
