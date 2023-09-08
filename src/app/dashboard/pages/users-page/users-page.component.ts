import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { UserServices } from './services/users.service';
import { Users } from './interfaces/getallusers.interface';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})


export class UsersPageComponent implements OnInit, OnDestroy {

  public allUsers: Users[] = [];
  public allUsersPag: [Users[]] = [[]];

  public userSelected = {
    id: "",
    nombre: "",
    email: "",
    password: "",
  };

  public newUserInfo = {
    api_token: "",
    nombre: "",
    email: "",
    password: "",
  };

  public idToDelete: string | number = "";
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private userService: UserServices
  ) {

  }
  ngOnInit(): void {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.getAllUsers();
      this.getApiToken();
      this.dtOptions = {
        pagingType: 'full_numbers',
        // retrieve: true,
        "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
        }
      };
    }

  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getApiToken() {
    let usuario: any = localStorage.getItem('USER');
    usuario = JSON.parse(usuario);
    if (!!usuario) {
      this.newUserInfo.api_token = usuario.api_token;
    }
  }

  async getAllUsers() {
    try {
      const resultado = await this.userService.getAllUsers();
      // console.log('Todos los usuarios', resultado);
      this.allUsers = resultado.data;
      // this.rerender();
      this.dtTrigger.next(resultado.data);
    } catch (error: any) {
      console.error('error ->', error);
    }
  };

  selectUser(usuario: Users) {
    this.userSelected = {
      id: usuario.id.toString(),
      email: usuario.email,
      nombre: usuario.nombre,
      password: ""
    }
  }

  cleanUserSelected() {
    this.userSelected = {
      id: "",
      email: "",
      nombre: "",
      password: ""
    }
  }

  async editUser() {
    // // console.log("data a enviar man ->", this.userSelected);

    if (
      this.userSelected.email.trim() === "" ||
      this.userSelected.nombre.trim() === "" ||
      this.userSelected.password.trim() === ""
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Complete el formulario',
        text: 'Alguno de los campos se encuentra vacia',
      });
      return;
    }
    try {
      let response = await this.userService.editUser(this.userSelected);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        return;
      }
      location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }
  }

  async createUser() {
    if (
      this.newUserInfo.email.trim() === "" ||
      this.newUserInfo.nombre.trim() === "" ||
      this.newUserInfo.password.trim() === ""
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Complete el formulario',
        text: 'Alguno de los campos se encuentra vacia',
      });
      return;
    }
    // // console.log('user info we ->', this.newUserInfo);
    try {
      let response = await this.userService.createUser(this.newUserInfo);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        return;
      }
      location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }
  }

  async deleteUser() {
    // // console.log('id selected ->', this.idToDelete);
    try {
      let response = await this.userService.deleteUser(this.idToDelete);
      // console.log('response delete ->', response);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        return;
      }
      location.reload();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }
  }
}
