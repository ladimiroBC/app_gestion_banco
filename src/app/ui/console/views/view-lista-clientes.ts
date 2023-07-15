import { ListCustomer } from "../components/list-customers";

export class ViewListCustomer {

  constructor(private list:ListCustomer){}

  ViewList() {
    this.list.ListCustomer();
  }
}
