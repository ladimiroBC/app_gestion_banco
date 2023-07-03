import { ICliente } from "../../domain/interfaces/cliente-interface";
import { TCliente } from "../../domain/models/cliente-type";

export interface IClienteService{
  listaClientes():TCliente[];
  postCliente(cliente:TCliente):void;
}
