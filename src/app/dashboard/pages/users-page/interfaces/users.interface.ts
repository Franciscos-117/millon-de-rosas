export interface User {
  id:         number;
  nombre:     string;
  email:      string;
  password:   string;
  api_token:  string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
}
