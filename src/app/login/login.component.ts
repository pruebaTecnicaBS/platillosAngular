import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { BaseFormUser } from '@shared/utils/base-form-user';
//import { AuthService } from '@auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  private subscription: Subscription = new Subscription();

  constructor(
    //private authSvc: AuthService,
    private router: ActivatedRoute
  ) // public loginForm: BaseFormUser
  {}

  ngOnInit(): void {
    //this.loginForm.baseForm.get('role').setValidators(null);
    //this.loginForm.baseForm.get('role').updateValueAndValidity();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 
}
