import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../shared/services/login.service';

export class DefaultStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: Boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passFormControl = new FormControl('', [Validators.required]);

  matcher = new DefaultStateMatcher();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.emailFormControl.valid && this.passFormControl.valid) {
      this.loginService.login(this.emailFormControl.value, this.passFormControl.value);
    } else {
      this.emailFormControl.markAsTouched();
      this.passFormControl.markAsTouched();
    }
  }

}
