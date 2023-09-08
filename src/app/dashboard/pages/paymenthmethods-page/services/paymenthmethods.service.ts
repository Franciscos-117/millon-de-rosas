import { Injectable } from "@angular/core";
import axios from "axios";
import { PaymenthMethodsResponse } from "../interfaces/paymenthmethods.interface";
import { environments } from "src/app/environments/environments.prod";

@Injectable({
  providedIn: 'root'
})
export class PaymenthMethodsServices {

  async getAllPaymenthMethods(): Promise<PaymenthMethodsResponse> {
    let allProviders = await axios.get(`${environments.baseUrl}cat_forma_de_pago?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allProviders.data;
  }

  async createPaymenthMethod(data: any) {
    let response = await axios.post(`${environments.baseUrl}cat_forma_de_pago?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&tipo=${data.tipo}&nombre_titular_banco=${data.nombre_titular_banco}&banco=${data.banco}&cuenta=${data.cuenta}&clabe=${data.clabe}&tarjeta=${data.tarjeta}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }

  async editPaymenthMethod(data: any) {
    // // console.log('data  que llego ->', data);
    let response = await axios.put(`${environments.baseUrl}cat_forma_de_pago/${data.id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&tipo=${data.tipo}&nombre_titular_banco=${data.nombre_titular_banco}&banco=${data.banco}&cuenta=${data.cuenta}&clabe=${data.clabe}&tarjeta=${data.tarjeta}&usuario_id=${data.usuario_id}`);
    return response.data;
  }


  async deletePaymenthMethod(id: string | number) {
    let response = await axios.delete(`${environments.baseUrl}cat_forma_de_pago/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

}
