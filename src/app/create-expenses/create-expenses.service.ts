import { HttpClient } from '@angular/common/http';
import { Expense } from '../shared/models/expense.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CreateExpensesService {
    static BASE_HREF = 'http://localhost:5000/expense/add';
    constructor(private httpClient: HttpClient) {}

    create(expense: Expense) {
        console.log('saving expenses', expense);
        return this.httpClient.post(CreateExpensesService.BASE_HREF, expense)
        .pipe(
            map(response => response)
        );
    }
}
