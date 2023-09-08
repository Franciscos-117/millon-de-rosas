import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ProvidersPageComponent } from './pages/providers-page/providers-page.component';
import { PaymenthmethodsPageComponent } from './pages/paymenthmethods-page/paymenthmethods-page.component';
import { IncomePageComponent } from './pages/income-page/income-page.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';
import { BalancesPageComponent } from './pages/balances-page/balances-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

//*localhost:4200/dashboard/...
const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children: [
    { path: 'inicio', component: HomePageComponent },
    { path: 'usuarios', component: UsersPageComponent },
    { path: 'clientes', component: ClientsPageComponent },
    { path: 'proveedores', component: ProvidersPageComponent },
    { path: 'formas_de_pago', component: PaymenthmethodsPageComponent },
    { path: 'ingresos', component: IncomePageComponent },
    { path: 'egresos', component: ExpensesPageComponent },
    { path: 'saldos', component: BalancesPageComponent },
    { path: 'pedidos', component: OrdersPageComponent },
    { path: 'historial-pedidos', component: HistoryPageComponent },
    // { path: '', redirectTo: 'inicio' },
    // { path: '**', redirectTo: 'inicio' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
