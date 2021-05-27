import { ListeComponent } from './liste/liste.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModificationComponent } from './modification/modification.component';
import { OublierComponent } from './oublier/oublier.component';
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {EtudiantComponent} from './etudiant/etudiant.component'
import {  FormateurComponent}  from './formateur/formateur.component'
import { FinanceComponent } from './finance/finance.component';


//import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'etudiant/:id',component:EtudiantComponent},
  {path:'formateur/:id',component:FormateurComponent},
  {path:'finance/:id',component:FinanceComponent},
 {path:'admin/:id',component:AdminComponent},
 {path:'ErreurSaisie',component:ErreurSaisieComponent},
 {path:'oublier',component:OublierComponent},
 {path:'modification',component:ModificationComponent},
 {path:'inscription',component:InscriptionComponent},
 {path:'liste',component:ListeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
