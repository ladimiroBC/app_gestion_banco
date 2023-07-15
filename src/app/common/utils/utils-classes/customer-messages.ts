import { ECustomerMessage } from "../../constants/enum-customer-message";
import { ICustomerMessages } from "../utils-interface/customer-messages-interface";

export class CustomerMessages implements ICustomerMessages {
  showMessage(msn: ECustomerMessage): void {
    console.log(msn);
  }
}
