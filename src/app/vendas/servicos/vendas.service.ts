import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendas } from './vendas';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(
    private http: HttpClient
  ) { }
    
    consultar(codigoCliente: string){        
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/"+codigoCliente)
    .pipe(
      tap(console.log)
    );
  }

  incluir(venda: Vendas){        
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir/", venda);
  }

  remover(venda: Vendas){      
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover", venda);    
  }
}
