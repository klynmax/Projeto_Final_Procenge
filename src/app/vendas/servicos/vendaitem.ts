import { Produto } from 'src/app/produtos/servico/produto';

export class VendaItem  {
    codigo: string;
    produto: Produto;
    quantidade: string;
    dataVendaItem: Date;
}