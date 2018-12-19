import { Injectable } from '@angular/core';
import { CreateExpensesService } from '../../create-expenses/create-expenses.service';
import { Expense } from '../models/expense.model';

@Injectable()
export class CreateExpensesAction {
    constructor(private createExpensesService: CreateExpensesService) {}

    create(expense: Expense) {
        this.createExpensesService.create(expense)
        .subscribe(response => {
            console.log('create success: ', response);
        },
            error => console.log('Create error:', error)
        );
    }
}
