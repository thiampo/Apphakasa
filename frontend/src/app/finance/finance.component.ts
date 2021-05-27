import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(private route:ActivatedRoute, private LoginService:LoginService) { }
  id:any
  dataUser : any
  nomUser:any
  prenomUser:any
  ngOnInit(): void {this.id=this.route.snapshot.params['id'];

  this.id={value:this.id}
  console.log(this.id)
  this.LoginService.recevoir(this.id).subscribe((resultat)=>{
  this.dataUser=resultat
  this.nomUser=this.dataUser.nom
  this.prenomUser=this.dataUser.prenom
  console.log(resultat)

  })
  }

}
