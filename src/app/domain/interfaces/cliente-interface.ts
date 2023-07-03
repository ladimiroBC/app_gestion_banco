import { TCliente } from "../models/cliente-type";

export interface ICliente {
  verClientes():TCliente[];
  agregarCliente(cliente:TCliente):void;
  clienteCedula(id:number):void;
  actualizarCliente(cliente:TCliente):void;
}
