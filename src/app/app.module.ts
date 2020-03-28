import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './cliente/servico/cliente.service';

import {MatIconModule} from '@angular/material/icon';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosmanterComponent } from './produtos/produtosmanter/produtosmanter.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';

const MaterialComponents = [
  MatIconModule,
];


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClienteComponent,
    ClientemanterComponent,
    ProdutosComponent,
    ProdutosmanterComponent,
    VendasComponent,
    VendasmanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
