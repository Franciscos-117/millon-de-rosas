import { Component, OnInit, OnDestroy } from '@angular/core';
import { Income } from './interfaces/income.interface';
import IncomesServices from './services/incomes.service';
import { Subject } from 'rxjs';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  styleUrls: ['./income-page.component.css']
})


export class IncomePageComponent implements OnInit, OnDestroy {
  public incomes: Income[] = [];
  public user?: any;
  public idDelete: string | number = "";
  public quantityItems: number = 20;
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    private services: IncomesServices
  ) { }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.user = usuario;
      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
      };
      this.getAllIncomes();
    }
  }

  async getAllIncomes() {
    try {
      let response = await this.services.getAllPaymenthMethods();
      // console.log('response incomes ->', response);
      this.incomes = response.data;
      this.dtTrigger.next(response.data);
    } catch (error) {
      // console.log('erroir incomes ->', error)
    }
  }

  async deleteIncome() {
    // console.log('id selected ->', this.idDelete);
  }
}
