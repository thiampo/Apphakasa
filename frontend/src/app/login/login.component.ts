import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, Validators, FormControl, FormGroup } from '@angular/forms';
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor(private LoginService:LoginService, private router:Router, ) { }

  ngOnInit(): void {



  }
  idUser:any
  prenomUser:any

  connection(form){
    console.log("hello")
    console.log(form.value)
    return this.LoginService.donne(form.value).subscribe((resultat:any)=>{
      console.log(resultat)
      this.idUser=resultat.userInfo.userId
      console.log(this.idUser)
      if(resultat.userInfo.role==="finance"){
        this.router.navigate(['finance/'+this.idUser])
      }
      else if (resultat.userInfo.role==="Formateur") {
        this.router.navigate(['Formateur/'+this.idUser])
      }else if(resultat.userInfo.role==="etudiant"){
        this.router.navigate(['etudiant/'+this.idUser])
      }
      else if(resultat.userInfo.role==="admin"){
        var list = resultat.tasks
        this.router.navigate(['admin/'+this.idUser])
        console.log(resultat.task)
      }
  })
 }



}
