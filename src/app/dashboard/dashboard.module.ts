import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { SidebarComponent } from './pages/layout-page/sidebar/sidebar.component';
import { NavbarComponent } from './pages/layout-page/navbar/navbar.component';
import { UserServices } from './pages/users-page/services/users.service';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ProvidersPageComponent } from './pages/providers-page/providers-page.component';
import { ProviderServices } from './pages/providers-page/services/providers.service';
import { PaymenthmethodsPageComponent } from './pages/paymenthmethods-page/paymenthmethods-page.component';
import { IncomePageComponent } from './pages/income-page/income-page.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component';
import { BalancesPageComponent } from './pages/balances-page/balances-page.component';
import IncomesServices from './pages/income-page/services/incomes.service';
import ExpensesServices from './pages/expenses-page/services/expenses.service';
import ClientServices from './pages/clients-page/services/clients.service';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import OrderServices from './pages/orders-page/services/orders.service';
import { GoogleAutocompleteComponent } from './components/google-autocomplete/google-autocomplete.component';
import { DataTablesModule } from "angular-datatables";
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import BalancesServices from './pages/balances-page/services/Balances.service';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    UsersPageComponent,
    ClientsPageComponent,
    SidebarComponent,
    NavbarComponent,
    ProvidersPageComponent,
    PaymenthmethodsPageComponent,
    IncomePageComponent,
    ExpensesPageComponent,
    BalancesPageComponent,
    OrdersPageComponent,
    GoogleAutocompleteComponent,
    HistoryPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    UserServices,
    ProviderServices,
    IncomesServices,
    ExpensesServices,
    ClientServices,
    OrderServices,
    BalancesServices
  ]
})
export class DashboardModule { }
