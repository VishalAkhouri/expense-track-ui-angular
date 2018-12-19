import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAction } from '../models/IAction.model';
import { ListExpensesService } from '../../list-expenses/list-expenses.service';

@Injectable()
export class ListExpensesAction {
    static LIST_RESPONSE = 'LIST_RESPONSE';

    constructor(private ngRedux: NgRedux<IAction>, private listExpensesService: ListExpensesService) {
    }

    list() {
        this.listExpensesService.list()
        .subscribe(response => {
            this.ngRedux.dispatch({type: ListExpensesAction.LIST_RESPONSE, payload: response});
        },
        err => {
            console.log('Inside error : ', err);
        });
    }
}
