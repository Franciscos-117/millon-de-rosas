import { Component, OnDestroy, OnInit } from '@angular/core';
import { Expense } from './interfaces/expenses.interface';
import ExpensesServices from './services/expenses.service';
import { Provider } from '../providers-page/interfaces/provider.interface';
import { PaymenthMethod } from '../paymenthmethods-page/interfaces/paymenthmethods.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.component.html',
  styleUrls: ['./expenses-page.component.css']
})
export class ExpensesPageComponent implements OnInit, OnDestroy {

  private user: any;
  public expenses: Expense[] = [];
  public providers: Provider[] = [];
  public paymenthMethods: PaymenthMethod[] = [];

  public infoNewExpense = {
    fecha: '',
    proveedor_id: '',
    descripcion: '',
    importe: '',
    forma_de_pago_id: '',
    usuario_id: '',
  };

  public infoEditExpense = {
    fecha: '',
    proveedor_id: '',
    descripcion: '',
    importe: '',
    forma_de_pago_id: '',
    usuario_id: '',
    id: '',
  };

  public idDelete: string | number = "";

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    private services: ExpensesServices
  ) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.infoNewExpense.usuario_id = usuario.id;
      this.infoEditExpense.usuario_id = usuario.id;

      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
      };

      this.getAllExpenses();
    }
  }

  async getAllExpenses() {
    try {
      let response = await this.services.getAllExpenses();
      // // console.log('response all expenses ->', response);
      let allPro = await this.services.getAllProviders();
      let allMethods = await this.services.getAllPaymenthMethods();
      this.paymenthMethods = allMethods.data;
      this.providers = allPro.data;
      this.expenses = response.data;
      this.dtTrigger.next(response.data);
    } catch (error) {
    }
  }

  async createExpense() {
    // console.log('info a enviar ->', this.infoNewExpense);
    try {
      let response = await this.services.createExpense(this.infoNewExpense);
      // console.log('response ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('error ->', error);
    }
  }

  selectExpense(expense: Expense) {
    // console.log('expense select ->', expense);
    this.infoEditExpense = {
      ...this.infoEditExpense,
      descripcion: expense.descripcion,
      fecha: expense.fecha,
      forma_de_pago_id: expense.forma_de_pago_id.toString(),
      id: expense.id.toString(),
      importe: expense.importe,
      proveedor_id: expense.proveedor_id.toString(),
    }
  }

  async editExpense() {
    // console.log('data a enviar ->', this.infoEditExpense);
    try {
      let response = await this.services.editExpense(this.infoEditExpense);
      // console.log('info edit expense ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('error edit expen ->', error);
    }
  }

  async deleteExpense() {
    // console.log('id delete ->', this.idDelete);
    try {
      let response = await this.services.deleteExpense(this.idDelete);
      // console.log('info delete expense ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('error delete expen ->', error);
    }
  }

}
