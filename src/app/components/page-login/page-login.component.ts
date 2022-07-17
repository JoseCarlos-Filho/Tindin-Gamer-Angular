import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { FormBuilder } from '@angular/forms';
import  {Login } from '../../interfaces/login'


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });



  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
            ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //this.login.email = this.loginForm.value.email?.toString();
    //this.login.password = this.loginForm.value.password?.toString();
    const login: Login = {
      email: this.loginForm.value.email?.toString(),
      password: this.loginForm.value.password?.toString()
    };
    // Process checkout data here
    let algumacoisa = this.loginService.login(login).subscribe(login =>{
      console.log(login)
    })
    console.log(algumacoisa);
    //console.warn('Your order has been submitted', this.loginForm.value);
    //this.loginForm.reset();
  }

}
