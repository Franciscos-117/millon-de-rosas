export interface IncomeResponse {
  notificacion: Notificacion;
  data:         Income[];
}

export interface Income {
  id:               number;
  pedido_id:        number;
  forma_de_pago_id: number;
  fecha:            Date;
  importe:          string;
  usuario_id:       number;
  created_at:       Date;
  updated_at:       Date;
  deleted_at:       null;
  forma_de_pago:    FormaDePago;
  pedido:           Pedido;
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
  created_at:           Date;
  updated_at:           Date;
  deleted_at:           null;
}

export interface Pedido {
  id:           number;
  cliente_id:   number;
  costo:        string;
  anticipo:     string;
  saldo:        string;
  usuario_id:   number;
  status:       number;
  created_at:   Date;
  updated_at:   Date;
  deleted_at:   null;
  fecha_pedido: Date;
}

export interface Usuario {
  id:         number;
  nombre:     string;
  email:      string;
  password:   string;
  api_token:  string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
}

export interface Notificacion {
  estado:  number;
  mensaje: string;
}
