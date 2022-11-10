import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CUser } from '../cuser.class';
import { UsersService } from '../users.service';

@Component({
  template: `
    <main class="form-signin m-auto my-5 text-center">
      <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <!-- <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> -->
        <h1 class="h3 mb-3 fw-normal">Please register!</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" ngModel name="email" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" ngModel name="password" />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </main>
  `,
  styles: [
    `
      .form-signin {
        width: 300px;
      }
    `,
  ],
})
export class LoginPage implements OnInit {
  @ViewChild('f') mioForm!: NgForm;

  // users: CUser[] = [];
  id = 3;
  constructor(private authService: AuthService, private userService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    let user = new CUser(form.value.email, form.value.password, this.id);
    this.authService.login(user.email, user.password);
    console.log(user);
    this.userService.users.push(user);
    console.log(this.userService.users);
    this.id++;
  }
}
