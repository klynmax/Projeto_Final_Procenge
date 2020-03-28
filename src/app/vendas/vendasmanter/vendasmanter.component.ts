import { Component, OnInit } from '@angular/core';
import { Vendas } from '../servicos/vendas';
import { VendaItem } from '../servicos/vendaitem';
import { Produto } from 'src/app/produtos/servico/produto';
import { Router } from '@angular/router';
import { VendasService } from '../servicos/vendas.service';
import { ProdutoService } from 'src/app/produtos/servico/produto.service';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { ProdutosComponent } from 'src/app/produtos/produtos.component';

@Component({
  selector: 'app-vendasmanter',
  templateUrl: './vendasmanter.component.html',
  styleUrls: ['./vendasmanter.component.scss']
})
export class VendasmanterComponent implements OnInit {

  operacao: string = 'Incluir';
  vendas: Vendas = new Vendas();
  vendaitem: VendaItem = new VendaItem();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendaService: VendasService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {

    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    this.produtoService.pesquisar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  incluir(){
    this.vendaService.incluir(this.vendas).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/vendas']);
      }
    );
  }

  voltar(){
    this.router.navigate(['/vendas'])
  }

  adicionar(){
    this.vendas.listaVendaItem.push(this.vendaitem);
    this.vendaitem = new VendaItem();
  }

  removerproduto(vendaitem){
    this.vendas.listaVendaItem = this.vendas.listaVendaItem.filter(obj => obj !== vendaitem);
  }

}
