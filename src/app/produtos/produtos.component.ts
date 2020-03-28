import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';
import { Produto } from './servico/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto();
  selecionado: Produto;
  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtosServico: ProdutoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){

    this.produtosServico.pesquisar(this.produto.nome).subscribe(
      (retorno: Produto[]) => {
        this.listaProduto = retorno;
        
      }

    );

  }

  selecionar(valor){
    this.selecionado = valor;    
  }

  cadastrar(){
    this.router.navigate(['/produto/cadastrar']);
  }

  alterar(){    
    this.router.navigate(['produto/alterar/'+this.selecionado.nome]);
    
  }

  remover(){

    this.produtosServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
    
  }

}
