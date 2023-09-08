import { Injectable } from "@angular/core";
import axios from "axios";
import { Provider, ProviderResponse } from "../interfaces/provider.interface";
import { environments } from "src/app/environments/environments.prod";

@Injectable({
  providedIn: 'root'
})
export class ProviderServices {

  async getAllProviders(): Promise<ProviderResponse> {
    let allProviders = await axios.get(`${environments.baseUrl}cat_proveedores?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allProviders.data;
  }

  async createProvider(data: any) {
    let response = await axios.post(`${environments.baseUrl}cat_proveedores?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&direccion=${data.direccion}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }

  async editProvider(data: any) {
    // // console.log('data  que llego ->', data);
    let response = await axios.put(`${environments.baseUrl}cat_proveedores/${data.id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&direccion=${data.direccion}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`);
    return response.data;
  }


  async deleteProvider(id: string | number) {
    let response = await axios.delete(`${environments.baseUrl}cat_proveedores/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

}
