import axios from "axios";
import { ClientsResponse } from "../interfaces/clients.interface";
import { environments } from "src/app/environments/environments.prod";

export default class ClientServices {
  async getAllClients(): Promise<ClientsResponse>{
    let response = await axios.get(`${environments.baseUrl}cat_clientes?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
  async createClient(data: any){
    let response = await axios.post(`${environments.baseUrl}cat_clientes?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }
  async editClient(data: any){
    let response = await axios.put(`${environments.baseUrl}cat_clientes/${data.id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }
  async deleteClient(id: any){
    let response = await axios.delete(`${environments.baseUrl}cat_clientes/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
};
