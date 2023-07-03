import { ICliente } from "../interfaces/cliente-interface";
import { TCliente } from "../models/cliente-type";
import data from "../../../assets/data/clientes.json";
import { IClienteMessages } from "../interfaces/cliente-msn-interface";
import { EClienteMessage } from "../../common/constants/enum-cliente-msn";

export class Cliente implements ICliente {
  private clientes: TCliente[] = [];
  private cliente: TCliente[];

  constructor(private cliente_msn: IClienteMessages) {}

  verClientes(): TCliente[] {
    this.clientes = data.clientes;
    return this.clientes;
  }

  agregarCliente(cliente: TCliente): void {
    this.clientes.push(cliente);
  }

  clienteCedula(cedula: number): void {
    let find = this.clientes.some((cliente) => {
      return cliente.cedula == cedula;
    });
    if (find) {
      this.cliente = this.clientes.filter((cliente) => {
        return cliente.cedula == cedula;
      });
      console.table(this.cliente[0]);
    } else {
      this.cliente_msn.mostrarMsn(EClienteMessage.CLIENTE_NO_REGISTRADO);
    }
  }

  actualizarCliente(cliente: TCliente): void {
    throw new Error("Method not implemented.");
  }
}
