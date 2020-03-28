import { Component, OnInit } from '@angular/core';
import { Cliente } from './servico/cliente';
import { Router } from '@angular/router';
import { ClienteService } from './servico/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  selecionado: Cliente;
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteServico: ClienteService 
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(){

    this.clienteServico.pesquisar(this.cliente.nome).subscribe(
      (retorno: Cliente[]) => {
        this.listaCliente = retorno;
      }
    );

  }

  cadastrar(){
    this.router.navigate(['/cliente/cadastrar']);
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

  alterar(){    
    this.router.navigate(['/cliente/alterar/'+this.selecionado.nome]);
  }

  remover(){

    this.clienteServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
    
  }

}
