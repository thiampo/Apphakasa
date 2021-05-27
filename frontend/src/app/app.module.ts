
import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
//import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component'
import { ErreurSaisieComponent } from './erreur-saisie/erreur-saisie.component';
import { EtudiantComponent } from   './etudiant/etudiant.component'
import { FinanceComponent } from   './finance/finance.component';
import { FormateurComponent } from   './formateur/formateur.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ModificationComponent } from './modification/modification.component';
import { OublierComponent } from './oublier/oublier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';
import { ListeComponent } from './liste/liste.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EtudiantComponent,
    FinanceComponent,
    FormateurComponent,
    ErreurSaisieComponent,

    AdminComponent,
    ModificationComponent,
    OublierComponent,
    InscriptionComponent,
    EnvoyerComponent,
    ListeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
