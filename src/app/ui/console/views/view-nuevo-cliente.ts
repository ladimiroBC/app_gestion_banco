import { NewCustomer } from "../components/new-customer";

export class ViewNuevoCliente {

  constructor(private newCustomer:NewCustomer){}

  viewNewCustomer() {
    this.newCustomer.registeredCustomer();
  }
}
