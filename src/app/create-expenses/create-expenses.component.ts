import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CreateExpensesAction } from '../shared/actions/create-expenses.action';
import { Expense } from '../shared/models/expense.model';

@Component({
  selector: 'app-create-expenses',
  templateUrl: './create-expenses.component.html',
  styleUrls: ['create-expenses.component.scss']
})
export class CreateExpensesComponent implements OnInit {

  expenseForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private createExpenseAction: CreateExpensesAction) { }

  ngOnInit() {
    this.expenseForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      category: [null, Validators.required],
      source: [null, Validators.required],
      transactionDate: [null, [Validators.required]],
      creationDate: [null, [Validators.required]]
    });
  }


  handleExpenseSubmitted() {
    this.createExpenseAction.create(this.buildExpenses());
  }

  handleFormChanged() {
    console.log(this.expenseForm);
  }

  isFieldValid(fieldName) {
    return this.expenseForm && this.expenseForm.get(fieldName).touched && this.expenseForm.get(fieldName).invalid;
  }

  private buildExpenses(): Expense {
    return {
      description: this.expenseForm.get('description').value,
      amount: this.expenseForm.get('amount').value,
      category: this.expenseForm.get('category').value,
      source: this.expenseForm.get('source').value,
      transactionDate: this.expenseForm.get('transactionDate').value,
      creationDate: this.expenseForm.get('creationDate').value
    };
  }
}
