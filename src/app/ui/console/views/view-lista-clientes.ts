import { ListaClientes } from "../components/lista-clientes";

export class ViewListaCliente {

  constructor(private lista:ListaClientes){}

  ViewLista(){
    this.lista.mostrarListaClientes();
  }
}
