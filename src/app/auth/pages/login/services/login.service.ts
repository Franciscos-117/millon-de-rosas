import { Injectable } from "@angular/core";
import axios from "axios";
import { LoginResponse } from "../interfaces/loginresponse.interface";
import { environments } from "src/app/environments/environments.prod";

export default class LoginServices {

  async logIn(email: string, password: string): Promise<LoginResponse> {
    // console.log('url ->', `${environments.baseUrl}api/login?email=${email}&password=${password}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`)
    let response = await axios.post(
      `${environments.baseUrl}login?email=${email}&password=${password}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`,
      {});
    return response.data;
  }
}
