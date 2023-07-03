import { IClienteService } from "../../../services/interface-service/cliente-service-interface";

export class ListaClientes{
  constructor(private clienteSVC:IClienteService){}

  mostrarListaClientes(){
    let clientes = this.clienteSVC.listaClientes();
    clientes.forEach((cliente)=>{
      console.log(cliente);
    })
  }
}
