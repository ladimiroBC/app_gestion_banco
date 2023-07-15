import { ViewListCustomer } from "./ui/console/views/view-lista-clientes";

export class Application {

  constructor(private view_list:ViewListCustomer){}

  startApp() {
    this.view_list.ViewList();
  }
}
