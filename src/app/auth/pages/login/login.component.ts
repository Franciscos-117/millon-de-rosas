import { Component } from '@angular/core';
import { FormValModel } from '../interfaces/loginform.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import LoginServices from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authServices: LoginServices
  ) { }

  public formValues: FormValModel = {
    email: '',
    password: '',
  }




  async initSession() {
    if (this.formValues.email.trim() === '' || this.formValues.password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Complete el formulario',
        text: 'El Correo o contraseña estan vacios',
      });
      return;
    }
    try {
      let response = await this.authServices.logIn(this.formValues.email, this.formValues.password);
      // console.log("response hol ->", response.data);
      if (!response) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        return;
      }
      localStorage.setItem('USER', JSON.stringify(response.data));
      this.router.navigate(['/dashboard/inicio']);
    } catch (error: any) {
      // console.log('error login ->', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      return;
    }
  }

}
