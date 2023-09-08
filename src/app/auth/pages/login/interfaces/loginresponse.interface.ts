export interface LoginResponse {
  notificacion: Notificacion;
  data:         Data;
}

interface Data {
  id:         number;
  nombre:     string;
  email:      string;
  password:   string;
  api_token:  string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}

interface Notificacion {
  estado:  number;
  mensaje: string;
}
