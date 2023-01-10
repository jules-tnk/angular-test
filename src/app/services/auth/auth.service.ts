import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserAuthenticated: boolean = false;

  USER_AUTH_KEY = "USER_AUTH_KEY"
  DEFAULT_USER_NAME = "juju"
  DEFAULT_PASSWORD = "sacarina"

  constructor() {
    this.loadUserAuthStatusFromLocalStorage();
  }

  isUserLoggedIn(): boolean {
    this.loadUserAuthStatusFromLocalStorage()
    return this.isUserAuthenticated;
  }

  login(username: string, password: string){
    if (username == this.DEFAULT_USER_NAME && password == this.DEFAULT_PASSWORD){
      this.isUserAuthenticated = true;
      this.saveUserAuthStatusInLocalStorage()
    }
  }

  logout(){
    this.isUserAuthenticated = false;
    this.saveUserAuthStatusInLocalStorage()
  }

  saveUserAuthStatusInLocalStorage(){
    localStorage.setItem(this.USER_AUTH_KEY, JSON.stringify(this.isUserAuthenticated))
  }

  loadUserAuthStatusFromLocalStorage(){
    let savedUserAuthStatus = localStorage.getItem(this.USER_AUTH_KEY);
    if (savedUserAuthStatus) {
      this.isUserAuthenticated = JSON.parse(savedUserAuthStatus);
    }
  }

}
