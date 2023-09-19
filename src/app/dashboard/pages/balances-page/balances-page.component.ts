import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import BalancesServices from './services/Balances.service';
import { Balance } from './interfaces/AllBalances.interface';
import { Movements } from './interfaces/Movements.interface';
import { PaymenthMethod } from '../paymenthmethods-page/interfaces/paymenthmethods.interface';

@Component({
  selector: 'app-balances-page',
  templateUrl: './balances-page.component.html',
  styleUrls: ['./balances-page.component.css']
})
export class BalancesPageComponent implements OnInit, OnDestroy {
  @ViewChild('closeModal') public closeModal?: ElementRef;

  public balances: Balance[] = [];
  public movements: Movements[] = [];
  public paymenths: PaymenthMethod[] = [];
  public paymenths2: PaymenthMethod[] = this.paymenths.filter(values => values.id.toString() != this.formBalance.forma_de_pago_id);


  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    public services: BalancesServices
  ) { }

  public formBalance = {
    forma_de_pago_id: '',
    importe: '',
    forma_de_pago_id_destino: '',
    usuario_id: '',
  }


  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      // // console.log('usuario ->', usuario);
      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
      };
      this.formBalance.usuario_id = usuario.id;
      this.getAllBalances();
      this.getAllPays();
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  async getAllBalances() {
    try {
      let response = await this.services.getAllBalances();
      this.balances = response.data;
    } catch (error) {
      // console.log('Error get clients ->', error);
    }
  }
  filterOptions() {
    // Filtrar las opciones del segundo select según la selección del primero
    this.paymenths2 = this.paymenths.filter(option => option.id.toString() != this.formBalance.forma_de_pago_id);
  }

  async getAllPays() {
    try {
      let response = await this.services.getAllPaymenthMethods();
      this.paymenths = response.data;
    } catch (error) {
      // console.log('Error get clients ->', error);
    }
  }


  async createBalnce(){
    try {
      let response = await this.services.createBalance(this.formBalance);
      // console.log('response =>', response);
      location.reload();
    } catch (error) {

    }
  }

  async viewMovements(id: any){
    try {
      let response = await this.services.getMovementsPerId(id);
      this.movements = response.data;
    } catch (error) {

    }
  }


}
