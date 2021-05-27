import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {



  constructor(private LoginService:LoginService, private router:Router,private route:ActivatedRoute) { }
  id:any
  dataUser : any
  nomUser:any
  prenomUser:any

  ngOnInit(): void {

  this.id=this.route.snapshot.params['id']
  this.id={value:this.id}
  console.log(this.id)
  this.LoginService.recevoir(this.id).subscribe((resultat)=>{
  this.dataUser=resultat
  this.nomUser=this.dataUser.nom
  this.prenomUser=this.dataUser.prenom
  console.log(resultat)

  })
                 }
   connecter(f: { value: object; }){
    console.log("hello")
    console.log(f.value)
    return this.LoginService.insc(f.value).subscribe((resultat:any)=>{
      console.log(resultat)
      this.router.navigate(['admin/'+this.id])
  })
   }
  }
/*  connecter(f){
  console.log("hello")
  console.log(f.value)
  return this.LoginService.insc(f.value).subscribe((resultat:any)=>{
    console.log(resultat)
    this.router.navigate(['admin/'+this.id])
})
}
  */



