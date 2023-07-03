import scanf from "scanf";
import { EClienteMessage } from "../../../common/constants/enum-cliente-msn";
import { IClienteMessages } from "../../../domain/interfaces/cliente-msn-interface";
import { TCliente } from "../../../domain/models/cliente-type";
import { IClienteService } from "../../../services/interface-service/cliente-service-interface";

export class NuevoCliente {
  private cliente: TCliente;

  constructor(
    private clienteSVC: IClienteService,
    cliente: TCliente,
    private clienteMsn: IClienteMessages
  ) {
    this.cliente = cliente;
  }

  registroCliente() {
    this.clienteMsn.mostrarMsn(EClienteMessage.CLIENTE_NOMBRE);
    this.cliente.nombre = scanf("%s");
    this.clienteMsn.mostrarMsn(EClienteMessage.CLIENTE_APELLIDO);
    this.cliente.apellido = scanf("%s");
    this.clienteMsn.mostrarMsn(EClienteMessage.CLIENTE_CEDULA);
    this.cliente.cedula = scanf("%d");
    this.clienteMsn.mostrarMsn(EClienteMessage.CLIENTE_DEPOSITO);
    this.cliente.deposito = scanf("%d");
    
    this.clienteSVC.postCliente(this.cliente);
  }
}
