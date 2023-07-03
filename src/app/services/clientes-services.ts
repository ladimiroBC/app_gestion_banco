import { TCliente } from './../domain/models/cliente-type';
import { ICliente } from "../domain/interfaces/cliente-interface";
import { IClienteService } from "./interface-service/cliente-service-interface";

export class ClienteService implements IClienteService{
  
  constructor(private _cliente:ICliente){}
  
  listaClientes():TCliente[]{
    return this._cliente.verClientes();
  }

  postCliente(cliente: TCliente): void {
    this._cliente.agregarCliente(cliente);
  }
}
