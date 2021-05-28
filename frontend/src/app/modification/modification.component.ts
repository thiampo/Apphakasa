import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './../login.service';
@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  id:any
  email:any
  dataUser : any
  nomUser:any
  prenomUser:any
  roleUser:any
  telUser:any
  constructor(private LoginService:LoginService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
  this.id={value:this.id}
  console.log(this.id)
  this.LoginService.recevoir(this.id).subscribe((resultat)=>{
  this.dataUser=resultat
  this.nomUser=this.dataUser.Nom
  this.prenomUser=this.dataUser.Prenom
  this.roleUser=this.dataUser.role
  this.telUser=this.dataUser.tel
  console.log(resultat)

  })


  }
  connecter(f: { value: object; }){
    console.log("hello")
    console.log(f.value)
    return this.LoginService.modifier(f.value).subscribe((resultat:any)=>{
      console.log(resultat)
      //this.router.navigate(['admin/'+this.id])
  })
   }

}
