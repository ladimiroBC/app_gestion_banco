import { EClienteMessage } from "../../common/constants/enum-cliente-msn";
import { IClienteMessages } from "../interfaces/cliente-msn-interface";

export class ClienteMessage implements IClienteMessages{
  mostrarMsn(msn: EClienteMessage): void {
    console.log(msn);
  }
}
