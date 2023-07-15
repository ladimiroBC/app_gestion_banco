import { Application } from "./app/app";
import { CustomerService } from "./app/application/services/class-service/customer-service";
import { ListCustomer } from "./app/ui/console/components/list-customers";
import { ViewListCustomer } from "./app/ui/console/views/view-lista-clientes";

const app: Application = new Application(
  new ViewListCustomer(new ListCustomer(new CustomerService()))
);

app.startApp();

