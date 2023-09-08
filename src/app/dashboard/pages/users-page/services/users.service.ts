import { Injectable } from "@angular/core";
import axios from "axios";
import { AllUsersCatResponse } from "../interfaces/getallusers.interface";
import { environments } from "src/app/environments/environments.prod";

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  async getAllUsers(): Promise<AllUsersCatResponse> {
    let allUsersCat = await axios.get(`${environments.baseUrl}cat_usuarios?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allUsersCat.data;
  }

  async editUser(data: any) {
    let response = await axios.put(`
      ${environments.baseUrl}cat_usuarios/${data.id}?nombre=${data.nombre}&email=${data.email}&password=${data.password}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD
    `);
    return response.data;
  }

  async createUser(data: any){
    let response = await axios.post(`${environments.baseUrl}cat_usuarios?nombre=${data.nombre}&email=${data.email}&password=${data.password}&api_token=${data.api_token}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`, {});
    return response.data;
  }
  async deleteUser(id: string | number){
    let response = await axios.delete(`${environments.baseUrl}cat_usuarios/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

}
