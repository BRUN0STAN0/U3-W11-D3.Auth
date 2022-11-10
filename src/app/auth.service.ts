import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}

  login(email: string, password: string) {
    if (
      (email === 'example1@example.com' && password === '12345') ||
      (email === 'example2@example.com' && password === '12345') ||
      (email === 'example3@example.com' && password === '12345')
    ) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
