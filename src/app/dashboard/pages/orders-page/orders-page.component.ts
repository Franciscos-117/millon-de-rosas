import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { Order } from './interfaces/orders.interface';
import OrderServices from './services/orders.service';
import { Client } from '../clients-page/interfaces/clients.interface';
import { IncomePerId } from './interfaces/incomeid.interface';
import { PaymenthMethod } from '../paymenthmethods-page/interfaces/paymenthmethods.interface';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css'],
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective) dtElement?: DataTableDirective;
  @ViewChild('closeModal') public closeModal?: ElementRef;

  constructor(
    private services: OrderServices
  ) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  public orders: Order[] = [];
  public ordersPag: [Order[]] = [[]];
  public resultsFilter: Order[] = [];
  public quantityShow: number = 20;
  public searchText: string = '';



  public clients: Client[] = [];
  public payMethods: PaymenthMethod[] = [];
  public idDelete: string | number = '';
  public paymenthsPerId: IncomePerId[] = [];
  public autocomple: boolean = false;
  public urlMaps: string = '';
  public isCreatingClient: boolean = false;


  public clientForm = {
    nombre: '',
    telefono: '',
    email: '',
    usuario_id: ''
  }

  public formAddPay = {
    nombre: '',
    pedido_id: '',
    forma_de_pago_id: '',
    fecha: '',
    importe: '',
    usuario_id: '',
    saldo: '',
  }

  selectOrderToPay(order: Order) {
    this.formAddPay = {
      ...this.formAddPay,
      pedido_id: order.id.toString(),
      nombre: `${order.id} - ${order.cliente.nombre}`,
      saldo: order.saldo
    }
  };

  public productClicked: any = '';

  public newOrderInfo = {
    cliente_id: '',
    anticipo: '0',
    costo: '',
    status: '0',
    fecha_pedido: '',
    usuario_id: '',
    producto: '',
    tipo_entrega: '0',
    fecha_entrega: '',
    hora: '',
    nombre_receptor: '',
    telefono_receptor: '',
    direccion: '',
    mensaje_tarjeta: '',
    comentarios: '',
  }
  public editOrderInfo = {
    pedido_id: '',
    cliente_id: '',
    anticipo: '0',
    costo: '',
    status: '0',
    fecha_pedido: '',
    usuario_id: '',
    producto: '',
    tipo_entrega: '0',
    fecha_entrega: '',
    hora: '',
    nombre_receptor: '',
    telefono_receptor: '',
    direccion: '',
    mensaje_tarjeta: '',
    comentarios: '',
  }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      // // console.log('usuario ->', usuario);
      // this.infoNewClient.usuario_id = usuario.id;
      this.newOrderInfo.usuario_id = usuario.id;
      this.editOrderInfo.usuario_id = usuario.id;
      this.clientForm.usuario_id = usuario.id;
      this.formAddPay.usuario_id = usuario.id;
      this.getAllClients();
      this.getAllOrders();
      this.getAllPayMethods();
      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
        }
      };
    }
  }

  changeBoolClient(){
    this.isCreatingClient = !this.isCreatingClient;
  }



  selectOrderInfo(order: Order) {
    this.editOrderInfo = {
      ...this.editOrderInfo,
      anticipo: order.anticipo,
      cliente_id: order.cliente_id.toString(),
      comentarios: order.productos.comentarios,
      costo: order.costo,
      direccion: order.productos.direccion,
      fecha_entrega: order.productos.fecha_entrega,
      fecha_pedido: order.fecha_pedido,
      hora: order.productos.hora,
      mensaje_tarjeta: order.productos.mensaje_tarjeta,
      nombre_receptor: order.productos.nombre_receptor,
      pedido_id: order.id.toString(),
      producto: order.productos.producto,
      status: order.status.toString(),
      telefono_receptor: order.productos.telefono_receptor,
      tipo_entrega: order.productos.tipo_entrega,
    };
  }

  private async getAllOrders() {
    try {
      // this.rerender();

      let response = await this.services.getAllOrders();
      let resultsFiltered = response.data.filter(value => value.productos !== null && value.productos.status_proceso < 5);

      // // console.log('results firlted ->', resultsFiltered);
      this.orders = resultsFiltered;
      this.resultsFilter = resultsFiltered;
      this.dtTrigger.next(response.data);
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,

      });
    }
  }

  private async getAllPayMethods() {
    try {
      let response = await this.services.getAllPaymenthMethods();
      this.payMethods = response.data;
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,

      });
    }
  }

  async getAllClients() {
    try {
      let response = await this.services.getAllClients();
      this.clients = response.data;
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }
  async getPaymenthsOrders(id: number | string, product: any) {
    this.productClicked = product;
    try {
      // console.log('entro al try ->', id)
      let response = await this.services.getAllPaymenthsPerId(id);
      // console.log('response paymenths ->', response);
      this.paymenthsPerId = response.data;
    } catch (error: any) {
      // console.log('error get paymenths ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }

  async createOrder() {
    // console.log('info a enviar ->', this.newOrderInfo);
    if(this.newOrderInfo.tipo_entrega == '1' && this.newOrderInfo.direccion.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Se necesita una direccion',
      });
      return;
    }
    try {

      let response = await this.services.createOrder({
        ...this.newOrderInfo,
        direccion: this.newOrderInfo.tipo_entrega == '0' ? '' : this.newOrderInfo.direccion,
      });
      // console.log('response ->', response);
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      console.log('Error create order ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }
  async editOrder() {
    if(this.editOrderInfo.tipo_entrega == '1' && this.editOrderInfo.direccion.trim() === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Se necesita una direccion',
      });
      return;
    }
    try {
      let response = await this.services.editOrder({
        ...this.editOrderInfo,
        direccion: this.editOrderInfo.tipo_entrega == '0' ? '' : this.editOrderInfo.direccion,
      });
      // console.log('response ->', response);
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      console.log('Error edit order ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }

  async createPayToOrder() {
    console.log('info a enviar ->', this.formAddPay);
    if(Number(this.formAddPay.importe) > Number( this.formAddPay.saldo)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El importe no puede ser mayor al saldo pendiente.',
      });
      return;
    }
    try {
      let response = await this.services.payOrder(this.formAddPay);
      console.log('response pay ->', response);
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      // console.log('Error pay order ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }

  async deleteOrder() {
    // console.log('id to delete =>', this.idDelete);
    try {
      let response = await this.services.deleteOrder(this.idDelete);
      // console.log('response delete ->', response);
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      // console.log('Error delete order ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }

  async createClient() {
    // console.log('entrop -');
    // console.log('info a enviar new ->', this.infoNewClient);
    if(this.clientForm.email.trim() === '' || this.clientForm.nombre.trim() === '' ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algunos campos del cliente se encuentran vacios',
      });
      return;
    }
    try {
      let response = await this.services.createClient(this.clientForm);
      // console.log('response create client ->', response);
      this.clientForm = {
        ...this.clientForm,
        email: '',
        nombre: '',
        telefono: ''
      };
    this.isCreatingClient = false;
    this.getAllClients();
    } catch (error: any) {
      // console.log('error create client =>', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,

      });
    }
  }

  handlePlace(event: any) {
    // console.log('Eventooo ->', event);
    this.newOrderInfo.direccion = event.address;
    this.autocomple = true;
    this.urlMaps = event.url;
  }
  handlePlaceEdit(event: any) {
    // console.log('Eventooo ->', event);
    this.editOrderInfo.direccion = event.address;
    this.autocomple = true;
    this.urlMaps = event.url;
  }
  openGoogleMaps() {
    window.open(this.urlMaps, '_blank');
  }
}
