import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { NossaVisaoComponent } from './nossa-visao/nossa-visao.component';
import {RouterModule} from "@angular/router";
import {ContatoModule} from "./contato/contato.module";
import {AppRoutingModule} from "./app-routing.module";
import {NossaVisaoModule} from "./nossa-visao/nossa-visao.module";

@NgModule({
  declarations: [
    AppComponent,
    QuemSomosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContatoModule,
    NossaVisaoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
