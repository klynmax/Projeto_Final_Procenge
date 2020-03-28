import { Component, OnInit } from '@angular/core';
import { Vendas } from './servicos/vendas';
import { Cliente } from '../cliente/servico/cliente';
import { Router } from '@angular/router';
import { VendasService } from './servicos/vendas.service';
import { ClienteService } from '../cliente/servico/cliente.service';
//import { Produto } from '../produtos/servico/produto';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  vendas: Vendas = new Vendas();
  selecionado: Vendas;

  listaVendas: Vendas[] = [];

  listaCliente: Cliente[] = [];
  

  constructor(
    private router: Router,
    private vendaService: VendasService,
    private clienteService: ClienteService
    
  ) { }

  ngOnInit(): void {

    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let codigoCliente = '';
    if(this.vendas.cliente != null){
      codigoCliente = this.vendas.cliente.codigo;
    }

   this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVendas = <Vendas[]>data;
      }
    );
    
  }

  pesquisar(){

    let codigoCliente = '';
    if(this.vendas.cliente != null){
      codigoCliente = this.vendas.cliente.codigo;
    }

   this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVendas = <Vendas[]>data;
      }
    );

  }

  selecionar(valor){
    this.selecionado = valor;    
  }

  incluir(){    
    this.router.navigate(['/vendas/incluir']);
  }

  remover(){

    this.vendaService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }
  
}
