import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import BalancesServices from './services/Balances.service';
import { Balance } from './interfaces/AllBalances.interface';
import { Movements } from './interfaces/Movements.interface';

@Component({
  selector: 'app-balances-page',
  templateUrl: './balances-page.component.html',
  styleUrls: ['./balances-page.component.css']
})
export class BalancesPageComponent implements OnInit, OnDestroy {
  @ViewChild('closeModal') public closeModal?: ElementRef;

  public balances: Balance[] = [];
  public movements: Movements[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    public services: BalancesServices
  ) { }

  public formBalance = {
    cliente_id: '',
    importe: '',
    destino_id: '',
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


  createBalnce(){

  }

  async viewMovements(id: any){
    try {
      let response = await this.services.getMovementsPerId(id);
      this.movements = response.data;
    } catch (error) {

    }
  }


}
