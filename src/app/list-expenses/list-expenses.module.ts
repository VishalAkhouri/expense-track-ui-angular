import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListExpensesComponent } from './list-expenses.component';
import { ListExpensesService } from './list-expenses.service';
import { ListExpensesAction } from '../shared/actions/list-expenses.action';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [ListExpensesComponent],
    providers: [
        HttpClient,
        ListExpensesService,
        ListExpensesAction
    ]
})
export class ListExpensesModule {
}
