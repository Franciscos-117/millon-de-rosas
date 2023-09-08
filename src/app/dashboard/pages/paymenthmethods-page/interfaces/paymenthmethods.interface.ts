export interface PaymenthMethodsResponse {
  notificacion: Notificacion;
  data:         PaymenthMethod[];
}

export interface PaymenthMethod {
  id:                   number;
  nombre:               string;
  tipo:                 number;
  nombre_titular_banco: string;
  banco:                string;
  cuenta:               string;
  clabe:                string;
  tarjeta:              string;
  usuario_id:           number;
  created_at:           string;
  updated_at:           string;
  deleted_at:           null;
  usuario:              Usuario;
}

export interface Usuario {
  id:         number;
  nombre:     string;
  email:      string;
  password:   string;
  api_token:  string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface Notificacion {
  estado:  number;
  mensaje: string;
}
