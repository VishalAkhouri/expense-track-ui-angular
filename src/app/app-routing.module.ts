import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router, Routes} from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { CreateExpensesComponent } from './create-expenses/create-expenses.component';


const routes: Routes = [
  {path: 'list', component: ListExpensesComponent},
  {path: 'create', component: CreateExpensesComponent},
  {path: '**', component: ListExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
