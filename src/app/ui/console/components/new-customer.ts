import scanf from "scanf";
import { ECustomerMessage } from "../../../common/constants/enum-customer-message";
import { ICustomerMessages } from "../../../common/utils/utils-interface/customer-messages-interface";
import { Customer } from "../../../domain/models/customer-type";
import { ICustomerService } from "../../../application/services/interface-service/customer-interface-service";

export class NewCustomer {
  
  constructor(
    private cusotmerSVC: ICustomerService,
    private customer: Customer,
    private customer_msn: ICustomerMessages
  ) {}

  registeredCustomer() {
    this.customer_msn.showMessage(ECustomerMessage.CUSTOMER_NAME);
    this.customer.name = scanf("%s");
    this.customer_msn.showMessage(ECustomerMessage.CUSTOMER_LASTNAME);
    this.customer.lastName = scanf("%s");
    this.customer_msn.showMessage(ECustomerMessage.CUSTOMER_IDNUMBER);
    this.customer.idNumber = scanf("%d");
    this.customer_msn.showMessage(ECustomerMessage.CUSTOMER_DEPOSIT);
    this.customer.deposit = scanf("%d");
    
    this.cusotmerSVC.addCustomer(this.customer);
  }
}
