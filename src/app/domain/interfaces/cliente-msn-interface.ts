import { EClienteMessage } from "../../common/constants/enum-cliente-msn";

export interface IClienteMessages {
  mostrarMsn(msn:EClienteMessage):void;
}
