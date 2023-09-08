import { Component } from '@angular/core';
import { Categorie } from './interfaces/categories.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private router: Router,
  ){

  }

  closeSession(){
    localStorage.clear();
    this.router.navigate(['./auth/login']);
  }

  public categories: Categorie[] = [
    {
      title: 'Dashboard',
      'subCategories': [

      ]
    },{
      title: 'Catalogos',
      subCategories: [
        {
          path: 'usuarios',
          'title': 'Usuarios'
        },
        {
          path: 'formas_de_pago',
          'title': 'Formas de pago'
        },
        {
          path: 'proveedores',
          title: 'Proveedores'
        },
      ]
    },
    {
      title: 'Contabilidad',
      subCategories: [
        {
          path: 'ingresos',
          title: 'Ingresos'
        },
        {
          path: 'egresos',
          title: 'Egresos'
        },
        {
          path: 'saldos',
          title: 'Saldos'
        },
      ]
    },
    {
      title: 'Pedido',
      subCategories: [
        {
          path: 'pedidos',
          title: 'Pedidos'
        },
        {
          path: 'clientes',
          title: 'Clientes'
        },
        {
          path: 'historial-pedidos',
          title: 'Historial de Pedidos'
        },

      ]
    }
  ];

  public navToOtherScreen(path: string){
    this.router.navigate(['/dashboard/' + path]);
  }
}
