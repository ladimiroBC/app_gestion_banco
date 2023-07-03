import { ViewListaCliente } from "./ui/console/views/view-lista-clientes";

export class Application{

  constructor(private view_lista:ViewListaCliente){}

  startApp(){
    this.view_lista.ViewLista();
  }
}
