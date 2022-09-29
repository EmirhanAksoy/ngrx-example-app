import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { StoreModule } from '@ngrx/store';
import { stocksReducer } from './store/reducers/stock.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ stocks : stocksReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
