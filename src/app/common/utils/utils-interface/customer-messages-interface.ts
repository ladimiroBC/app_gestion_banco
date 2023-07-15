import { ECustomerMessage } from "../../constants/enum-customer-message";

export interface ICustomerMessages {
  showMessage(msn: ECustomerMessage): void;
}
