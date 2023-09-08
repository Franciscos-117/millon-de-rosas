// Generated by https://quicktype.io

export interface OrdersResponse {
  notificacion: Notificacion;
  data:         Order[];
}

export interface Order {
  id:           number;
  cliente_id:   number;
  costo:        string;
  anticipo:     string;
  saldo:        string;
  usuario_id:   number;
  status:       number;
  created_at:   string;
  updated_at:   string;
  deleted_at:   null;
  fecha_pedido: string;
  cliente:      Cliente;
  usuario:      Cliente;
  productos:    Productos;
}

export interface Cliente {
  id:          number;
  nombre:      string;
  telefono?:   string;
  email:       string;
  usuario_id?: number;
  created_at:  string;
  updated_at:  string;
  deleted_at:  null;
  password?:   string;
  api_token?:  string;
}

export interface Productos {
  id:                number;
  pedido_id:         number;
  producto:          string;
  costo:             string;
  anticipo:          string;
  saldo:             string;
  fecha_entrega:     string;
  hora:              string;
  tipo_entrega:      string;
  nombre_receptor:   string;
  telefono_receptor: string;
  direccion:         string;
  mensaje_tarjeta:   string;
  comentarios:       string;
  status:            number;
  status_proceso:    number;
  created_at:        string;
  updated_at:        string;
  deleted_at:        null;
  repartidor:        string;
}

export interface Notificacion {
  estado:  number;
  mensaje: string;
}
