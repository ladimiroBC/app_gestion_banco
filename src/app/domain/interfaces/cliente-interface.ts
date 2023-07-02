import { TCliente } from "../models/cliente-type";

export interface ICliente {
  verClientes():void;
  agregarCliente(cliente:TCliente):void;
  clienteId(id:number):void;
  actualizarCliente(cliente:TCliente):void;
}
