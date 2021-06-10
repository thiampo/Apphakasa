import { FormGroup, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { ActivatedRoute , Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({ 
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  toastr: any;



  constructor(private route:ActivatedRoute, private LoginService:LoginService) { }
  id:any
  dataUser : any
  nomUser:any
  prenomUser:any
  allUser:any
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.id={value:this.id}
    this.LoginService.recept().subscribe((resultat:any)=>{
      this.allUser = resultat
      console.log('resultat.tasks')
      console.log(this.allUser)
    })
    console.log(this.id)
    this.LoginService.recevoir(this.id).subscribe((resultat)=>{
    this.dataUser=resultat
    this.nomUser=this.dataUser.Nom
    this.prenomUser=this.dataUser.Prenom
    console.log(resultat)

  })



  }

  delId:any;

  Supprimer(id:object){
    this.delId={delId:id}

    //fghjkh

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {

        this.LoginService.supp(this.delId).subscribe((resultat:any)=>{
          console.log(resultat)
          console.log(this.delId)
          location.reload();
                  })

        Swal.fire(
          'Deleted!',
          'Voudrais vous supprimer vraiment',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    //bghjkj

    
  }

// messsage supprimer




}
