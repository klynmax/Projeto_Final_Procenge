import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosmanterComponent } from './produtos/produtosmanter/produtosmanter.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';

const routes: Routes = [
 {
    path: '',    
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/cadastrar',    
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:id', 
    component: ClientemanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',    
    component: ProdutosComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/cadastrar',    
    component: ProdutosmanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:id',    
    component: ProdutosmanterComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendas',    
    component: VendasComponent,
    pathMatch: 'full'
  },
  {
    path: 'vendas/incluir',    
    component: VendasmanterComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
