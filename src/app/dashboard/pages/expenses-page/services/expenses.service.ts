import axios from "axios";
import { ExpenseResponse } from "../interfaces/expenses.interface";
import { ProviderResponse } from "../../providers-page/interfaces/provider.interface";
import { PaymenthMethodsResponse } from "../../paymenthmethods-page/interfaces/paymenthmethods.interface";
import { environments } from "src/app/environments/environments.prod";

export default class ExpensesServices {
  async getAllExpenses(): Promise<ExpenseResponse>{
    let allExpenses = await axios.get(`${environments.baseUrl}ctl_egresos?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allExpenses.data;
  };
  async getAllProviders(): Promise<ProviderResponse> {
    let allProviders = await axios.get(`${environments.baseUrl}cat_proveedores?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allProviders.data;
  }
  async getAllPaymenthMethods(): Promise<PaymenthMethodsResponse> {
    let allPayMethods = await axios.get(`${environments.baseUrl}cat_forma_de_pago?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allPayMethods.data;
  }

  async createExpense(data: any){
    let response = await axios.post(`${environments.baseUrl}ctl_egresos?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&fecha=${data.fecha}&proveedor_id=${data.proveedor_id}&descripcion=${data.descripcion}&importe=${data.importe}&forma_de_pago_id=${data.forma_de_pago_id}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }
  async editExpense(data: any){
    let response = await axios.put(`${environments.baseUrl}ctl_egresos/${data.id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&fecha=${data.fecha}&proveedor_id=${data.proveedor_id}&descripcion=${data.descripcion}&importe=${data.importe}&forma_de_pago_id=${data.forma_de_pago_id}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }

  async deleteExpense(id: any){
    let response = await axios.delete(`${environments.baseUrl}ctl_egresos/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

}
