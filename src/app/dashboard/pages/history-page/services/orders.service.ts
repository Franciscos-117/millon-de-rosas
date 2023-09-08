import axios from "axios";
import { OrdersResponse } from "../interfaces/orders.interface";
import { ClientsResponse } from "../../clients-page/interfaces/clients.interface";
import { IncomePerIDResponse } from "../interfaces/incomeid.interface";
import { PaymenthMethodsResponse } from "../../paymenthmethods-page/interfaces/paymenthmethods.interface";
import { environments } from "src/app/environments/environments.prod";
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export default class OrderServices {

  async getAllOrders(): Promise<OrdersResponse>{
    let response = await axios.get(`${environments.baseUrl}ctl_pedidos?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

  async getAllClients(): Promise<ClientsResponse>{
    let response = await axios.get(`${environments.baseUrl}cat_clientes?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
  async getAllPaymenthMethods(): Promise<PaymenthMethodsResponse> {
    let allProviders = await axios.get(`${environments.baseUrl}cat_forma_de_pago?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allProviders.data;
  }
  async getAllPaymenthsPerId(id: any): Promise<IncomePerIDResponse>{
    let response = await axios.get(`${environments.baseUrl}ctl_ingresos?pedido_id=${id}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
  async createClient(data: any){
    let response = await axios.post(`${environments.baseUrl}cat_clientes?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD&nombre=${data.nombre}&telefono=${data.telefono}&email=${data.email}&usuario_id=${data.usuario_id}`, {});
    return response.data;
  }


  async createOrder(data: any){
    let response = await axios.post(`${environments.baseUrl}ctl_pedidos?cliente_id=${data.cliente_id}&anticipo=${data.anticipo}&costo=${data.costo}&status=${data.status}&fecha_pedido=${data.fecha_pedido}&usuario_id=${data.usuario_id}&producto=${data.producto}&tipo_entrega=${data.tipo_entrega}&fecha_entrega=${data.fecha_entrega}&hora=${data.hora}&nombre_receptor=${data.nombre_receptor}&telefono_receptor=${data.telefono_receptor}&direccion=${data.direccion}&mensaje_tarjeta=${data.mensaje_tarjeta}&comentarios=${data.comentarios}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`, {});
    return response.data;
  }
  async editOrder(data: any){
    let response = await axios.put(`${environments.baseUrl}ctl_pedidos/${data.pedido_id}?pedido_id=${data.pedido_id}&cliente_id=${data.cliente_id}&anticipo=${data.anticipo}&costo=${data.costo}&status=${data.status}&fecha_pedido=${data.fecha_pedido}&usuario_id=${data.usuario_id}&producto=${data.producto}&tipo_entrega=${data.tipo_entrega}&fecha_entrega=${data.fecha_entrega}&hora=${data.hora}&nombre_receptor=${data.nombre_receptor}&telefono_receptor=${data.telefono_receptor}&direccion=${data.direccion}&mensaje_tarjeta=${data.mensaje_tarjeta}&comentarios=${data.comentarios}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`, {});
    return response.data;
  }

  async payOrder(data: any) {
    let response = await axios.post(`${environments.baseUrl}ctl_ingresos?pedido_id=${data.pedido_id}&forma_de_pago_id=${data.forma_de_pago_id}&fecha=${data.fecha}&importe=${data.importe}&usuario_id=${data.usuario_id}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`, {});
    return response.data;
  }

  async deleteOrder(id: string | number) {
    let response = await axios.delete(`${environments.baseUrl}ctl_pedidos/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }
}
