import { NuevoCliente } from "../components/nuevo-cliente";

export class ViewNuevoCliente {

  constructor(private nuevo:NuevoCliente){}

  viewNuevoCliente(){
    this.nuevo.registroCliente();
  }
}
