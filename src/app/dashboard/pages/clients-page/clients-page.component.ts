import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Client } from './interfaces/clients.interface';
import ClientServices from './services/clients.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit, OnDestroy {
  @ViewChild('closeModal') public closeModal?: ElementRef;

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(
    public services: ClientServices
  ) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  public clients?: Client[];

  public infoNewClient = {
    nombre: '',
    telefono: '',
    email: '',
    usuario_id: ''
  }

  public infoEditClient = {
    nombre: '',
    telefono: '',
    email: '',
    usuario_id: '',
    id: '',
  }

  public idDelete: string | number = '';

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
      this.infoNewClient.usuario_id = usuario.id;
      this.infoEditClient.usuario_id = usuario.id;
      this.getAllClients();
    }
  }

  selectClient(client: Client) {
    this.infoEditClient = {
      ...this.infoEditClient,
      email: client.email,
      nombre: client.nombre,
      telefono: client.telefono,
      id: client.id.toString(),
    }
  }

  async getAllClients() {
    try {
      let response = await this.services.getAllClients();
      this.clients = response.data;
      this.dtTrigger.next(response.data);
    } catch (error) {
      // console.log('Error get clients ->', error);
    }
  }


  async createClient() {
    // console.log('entrop -');
    // console.log('info a enviar new ->', this.infoNewClient);
    try {
      let response = await this.services.createClient(this.infoNewClient);
      // console.log('response create client ->', response);
      this.infoNewClient = {
        ...this.infoNewClient,
        email: '',
        nombre: '',
        telefono: ''
      };
    this.closeModal?.nativeElement.click();
    location.reload();
    } catch (error: any) {
      // console.log('error create client =>', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,

      });
    }
  }

  async editClient() {
    // console.log('info a enviar edit ->', this.infoEditClient);
    try {
      let response = await this.services.editClient(this.infoEditClient);
      // console.log('response edit client ->', response);
      this.infoEditClient = {
        ...this.infoEditClient,
        email: '',
        nombre: '',
        telefono: '',
        id: ''
      };
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      // console.log('error edit client =>', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,

      });
      return;
    }
  }

  async deleteClient() {
    // console.log('info a enviar delete ->', this.idDelete);
    try {
      let response = await this.services.deleteClient(this.idDelete);
      // console.log('response delete client ->', response);
      this.closeModal?.nativeElement.click();
      location.reload();
    } catch (error: any) {
      // console.log('error delete client =>', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.notificacion.mensaje,
      });
    }
  }
}
