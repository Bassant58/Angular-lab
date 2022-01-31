import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  user = {
    email: "", 
    password: ""
  }
  
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {

  }

  sendForm(){

      // console.log(this.user);
      this.authService.login(this.user).subscribe(
        (res)=>{
          localStorage.setItem('token' , res.token)
        },
        (error)=>{console.log(error);
        },
        ()=>{}
      )
      
      
  }
}


