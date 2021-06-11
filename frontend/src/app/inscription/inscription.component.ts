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
  console.log(this.id)
  
  }
   connecter(f: { value: object; }){
    console.log("hello")
    console.log(f.value)
  return this.LoginService.insc(f.value).subscribe((resultat:any)=>{
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



