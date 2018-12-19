import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListExpensesModule } from './list-expenses/list-expenses.module';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { ListExpensesState, listExpensesReducer, INITIAL_STATE } from './store/list-expenses.reducer';
import { CreateExpensesModule } from './create-expenses/create-expenses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    ListExpensesModule,
    CreateExpensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<ListExpensesState>) {
    ngRedux.configureStore(
      listExpensesReducer,
      INITIAL_STATE);
  }
}
