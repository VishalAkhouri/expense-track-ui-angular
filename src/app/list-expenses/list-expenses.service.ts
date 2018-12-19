import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class ListExpensesService {
    static BASE_HREF = 'http://localhost:5000/expense';
    constructor(private httpClient: HttpClient) {}

    list() {
        return this.httpClient.get(`${ListExpensesService.BASE_HREF}/`)
        .pipe(
            map(response => response)
        );
    }
}
