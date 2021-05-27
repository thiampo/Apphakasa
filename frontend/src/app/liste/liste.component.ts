import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private LoginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  idUser:any
  prenomUser:any

  connection(form){
    console.log("hello")
    console.log(form.value)
    return this.LoginService.donne(form.value).subscribe((resultat:any)=>{
      console.log(resultat.tasks)
    })

 }


}
