import axios from "axios";
import { IncomeResponse } from "../interfaces/income.interface";
import { environments } from "src/app/environments/environments.prod";


export default class IncomesServices {

  async getAllPaymenthMethods(): Promise<IncomeResponse>{
    let allPaymenthMethods = await axios.get(`${environments.baseUrl}ctl_ingresos?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return allPaymenthMethods.data;
  }


  async deleteIncome(id: string | number) {
    let response = await axios.delete(`${environments.baseUrl}ctl_ingresos/${id}?api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`);
    return response.data;
  }

}
