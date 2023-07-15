import { ICustomerService } from "../../../application/services/interface-service/customer-interface-service";

export class ListCustomer {
  constructor(private customerSVC:ICustomerService){}

  ListCustomer() {
    let customers = this.customerSVC.showCustomer();
    customers.forEach((customer) => {
      console.log(customer);
    })
  }
}
