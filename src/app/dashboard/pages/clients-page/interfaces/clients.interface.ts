// Generated by https://quicktype.io

export interface ClientsResponse {
  notificacion: Notificacion;
  data:         Client[];
}

export interface Client {
  id:         number;
  nombre:     string;
  telefono:   string;
  email:      string;
  usuario_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  usuario:    Usuario;
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
