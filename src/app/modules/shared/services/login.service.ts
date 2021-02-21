import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const emailConst = "admin@admin.com"
const passConst = "admin"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  login(email: string, password: string) {
    if (emailConst === email && passConst === password) {
      localStorage.setItem("user", JSON.stringify({ email: email, pass: password }));
      this.router.navigate(['list']);
    } else {
      alert('Wrong data!')
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isAuthenticated = () => localStorage.getItem("user") ? true : false;
}
