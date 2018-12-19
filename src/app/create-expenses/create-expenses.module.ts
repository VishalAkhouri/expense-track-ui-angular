import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateExpensesComponent } from './create-expenses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreateExpensesService } from './create-expenses.service';
import { CreateExpensesAction } from '../shared/actions/create-expenses.action';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        CreateExpensesComponent
    ],
    providers: [
        HttpClient,
        CreateExpensesService,
        CreateExpensesAction
    ]
})
export class CreateExpensesModule {}
