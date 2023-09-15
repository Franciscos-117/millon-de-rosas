import axios from "axios";
import { environments } from "src/app/environments/environments.prod";
import { AllBalances } from "../interfaces/AllBalances.interface";
import { AllMovements } from "../interfaces/Movements.interface";

export default class BalancesServices {
  async getAllBalances(): Promise<AllBalances>{
    let response = await axios.get(`${environments.baseUrl}ctl_saldos?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
  async getMovementsPerId(id: any): Promise<AllMovements>{
    let response = await axios.get(`${environments.baseUrl}ctl_saldos/movtoscuenta/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
  // async createClient(data: any){
  //   let response = await axios.post(`${environments.baseUrl}cat_clientes?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
  //   return response.data;
  // }
  // async editClient(data: any){
  //   let response = await axios.put(`${environments.baseUrl}cat_clientes/${data.id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
  //   return response.data;
  // }
  // async deleteClient(id: any){
  //   let response = await axios.delete(`${environments.baseUrl}cat_clientes/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
  //   return response.data;
  // }
};
