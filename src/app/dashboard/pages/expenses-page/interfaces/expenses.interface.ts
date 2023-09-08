export interface ExpenseResponse {
  notificacion: Notificacion;
  data:         Expense[];
}

export interface Expense {
  id:               number;
  fecha:            string;
  proveedor_id:     number;
  descripcion:      string;
  importe:          string;
  forma_de_pago_id: number;
  usuario_id:       number;
  created_at:       string;
  updated_at:       string;
  deleted_at:       null;
  forma_de_pago:    FormaDePago;
  proveedor:        Proveedor;
  usuario:          Usuario;
}

export interface FormaDePago {
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
}

export interface Proveedor {
  id:         number;
  nombre:     string;
  direccion:  string;
  telefono:   string;
  email:      string;
  usuario_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
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
