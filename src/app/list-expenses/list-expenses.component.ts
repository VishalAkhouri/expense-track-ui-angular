import { Component, OnInit } from '@angular/core';
import { ListExpensesService } from './list-expenses.service';
import { ListExpensesAction } from '../shared/actions/list-expenses.action';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit {
  @select() readonly listResponse$: Observable<any>;
  @select() readonly pageLoading$: Observable<boolean>;

  expensesList: any;
  constructor(
    private listExpensesAction: ListExpensesAction
  ) { }

  ngOnInit() {
    this.listExpensesAction.list();
    this.listResponseSubscribe();
  }

  private listResponseSubscribe() {
    this.listResponse$
    .subscribe(response => {
      this.expensesList = response;
    });
  }
}
