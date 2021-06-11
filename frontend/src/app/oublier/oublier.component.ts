import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-oublier',
  templateUrl: './oublier.component.html',
  styleUrls: ['./oublier.component.css']
})
export class OublierComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  oublier(form){
    console.log(form.value)
    return this.loginService.oublier(form.value).subscribe((resultat:any)=>{
      console.log(resultat)
      this.router.navigate(['login'])
     
  })
  
  }



}
