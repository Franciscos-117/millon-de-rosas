import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProviderServices } from './services/providers.service';
import Swal from 'sweetalert2';
import { Provider } from './interfaces/provider.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-providers-page',
  templateUrl: './providers-page.component.html',
  styleUrls: ['./providers-page.component.css']
})
export class ProvidersPageComponent implements OnInit, OnDestroy {
  @ViewChild('closeModal') public closeModal?: ElementRef;

  public providers: Provider[] = [];
  public idProviderSelected: number | string = "";
  public idProviderToDelete: number | string = "";

  public newProviderInfo = {
    nombre: "",
    direccion: "",
    email: "",
    telefono: "",
    usuario_id: ""
  };

  public editProviderInfo = {
    nombre: "",
    direccion: "",
    email: "",
    telefono: "",
    usuario_id: ""
  };

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();


  constructor(
    private services: ProviderServices
  ) { }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.getAllProviders();
      this.newProviderInfo.usuario_id = usuario.id;
      this.editProviderInfo.usuario_id = usuario.id;
      this.dtOptions = {
        pagingType: 'full_numbers',
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
          }
      };
    }
    // // console.log('pro updated form ->', this.newProviderInfo)
  };

  async getAllProviders() {
    try {
      let response = await this.services.getAllProviders();
      // // console.log('response pro ->', response);
      if (!!response) {
        this.providers = response.data;
        this.dtTrigger.next(response.data);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Algo salio mal, intentelo mas tarde',
      });
      return;
    }
  }

  selectedProvider(provider: Provider) {
    this.idProviderSelected = provider.id;
    this.editProviderInfo.direccion = provider.direccion;
    this.editProviderInfo.email = provider.email;
    this.editProviderInfo.nombre = provider.nombre;
    this.editProviderInfo.telefono = provider.telefono;
  }

  async createProvider() {
    try {
      let response = await this.services.createProvider(this.newProviderInfo);
      // // console.log('response new provider ->', response);
      if (!!response) {
        this.closeModal?.nativeElement.click();
        // this.getAllProviders();
        location.reload();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Algo salio mal, intentelo mas tarde',
      });
    }
  }
  async editProvider() {
    // // console.log('info to update ->', { ...this.editProviderInfo, id: this.idProviderSelected })
    try {
      let response = await this.services.editProvider({ ...this.editProviderInfo, id: this.idProviderSelected });
      // // console.log('response edit provider ->', response);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'Algo salio mal, intentelo mas tarde',
        });
        return;
      }
      this.closeModal?.nativeElement.click();
      // this.getAllProviders();
      location.reload();
    } catch (error) {
      // console.log('error edit pro ->', error)

    }
  }

  async deleteProvider() {
    try {
      let response = await this.services.deleteProvider(this.idProviderToDelete);
      // console.log('delete response ->', response);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'Algo salio mal, intentelo mas tarde',
        });
        return;
      }
      location.reload();
    } catch (error) {
      // console.log('Error delete provider ->', error);
    }
  }
  closeModalTest() {
    // this.closeModal?.nativeElement.click() //<-- here
  }
}
