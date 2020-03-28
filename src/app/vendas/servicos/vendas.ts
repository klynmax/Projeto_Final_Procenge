import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaItem } from './vendaitem';
import { Data } from '@angular/router';

export class Vendas  {
    codigo: string;
    dataVenda: Date;
    cliente: Cliente;
    listaVendaItem: VendaItem[] = [];     
}