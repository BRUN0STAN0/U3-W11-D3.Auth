export class CUser {
  name = 'example';
  id: number;
  role = 'user';
  email: string;
  password: string;
  constructor(email: string, password: string, id: number) {
    this.email = email;
    this.password = password;
    this.id = id;
  }
}
