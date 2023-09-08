import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymenthMethod } from './interfaces/paymenthmethods.interface';
import { PaymenthMethodsServices } from './services/paymenthmethods.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-paymenthmethods-page',
  templateUrl: './paymenthmethods-page.component.html',
  styleUrls: ['./paymenthmethods-page.component.css']
})
export class PaymenthmethodsPageComponent implements OnInit, OnDestroy {
  public paymenthMethods: PaymenthMethod[] = [];

  public typeMethod: number | string = "0";
  private user?: any;
  public idDelete: string | number = "";

  public infoNewMethod: any = {
    nombre: '',
    tipo: '',
    nombre_titular_banco: '',
    banco: '',
    cuenta: '',
    clabe: '',
    tarjeta: '',
    usuario_id: '',
  }

  public infoEditMethod: any = {
    nombre: '',
    tipo: '',
    nombre_titular_banco: '',
    banco: '',
    cuenta: '',
    clabe: '',
    tarjeta: '',
    usuario_id: '',
    id: ''
  }

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    private services: PaymenthMethodsServices
  ) { }


  ngOnInit(): void {
    this.getAllPaymenthsMethods();
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.user = usuario;
      this.infoNewMethod.usuario_id = usuario.id;
      this.infoEditMethod.usuario_id = usuario.id;
      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
      };
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  selectMethod(method: PaymenthMethod) {
    // // console.log('method ->', method);
    this.infoEditMethod = {
      ...this.infoEditMethod,
      nombre: method.nombre,
      tipo: method.tipo.toString(),
      nombre_titular_banco: method.nombre_titular_banco,
      banco: method.banco,
      cuenta: method.cuenta,
      clabe: method.clabe,
      tarjeta: method.tarjeta,
      id: method.id
    }
    this.typeMethod = method.tipo;
    // // console.log('info method upd ->', this.infoEditMethod);
  }

  async getAllPaymenthsMethods() {
    try {
      let response = await this.services.getAllPaymenthMethods();
      // console.log('response all methods ->', response);
      this.paymenthMethods = response.data;
      this.dtTrigger.next(response.data);
    } catch (error: any) {
      // console.log('error all methods ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: error.response.data.notificacion.mensaje,
      });
      return;
    }
  }


  async createMethod() {
    // // console.log('Entro :D ->',);
    this.infoNewMethod.tipo = this.typeMethod;
    // // console.log('data a enviar ->', this.infoNewMethod);
    try {
      let response = await this.services.createPaymenthMethod(this.infoNewMethod);
      // // console.log('response new method ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('Error creath method ->', error);
    }
  }
  async editMethod() {
    // // console.log('Entro :D ->',);
    this.infoEditMethod.tipo = this.typeMethod;
    if(this.typeMethod != '1'){
      this.infoEditMethod.nombre_titular_banco = '';
      this.infoEditMethod.banco = '';
      this.infoEditMethod.cuenta = '';
      this.infoEditMethod.clabe = '';
      this.infoEditMethod.tarjeta = '';
    }
    // // console.log('data a enviar ->', this.infoEditMethod);

    try {
      let response = await this.services.editPaymenthMethod(this.infoEditMethod);
      // // console.log('response edit method ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('Error edit method ->', error);
    }
  }

  async deleteMethod(){
    // console.log('id selected to delete ->', this.idDelete);
    try {
      let response = await this.services.deletePaymenthMethod(this.idDelete);
      // // console.log('response delete method ->', response);
      location.reload();
    } catch (error: any) {
      // console.log('delete error method->', error)
    }
  }


}
