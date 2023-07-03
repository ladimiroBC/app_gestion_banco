
import { Application } from "./app/app";
import { Cliente } from "./app/domain/classes/cliente";
import { ClienteMessage } from "./app/domain/classes/cliente-msn";
import { ClienteService } from "./app/services/clientes-services";
import { ListaClientes } from "./app/ui/console/components/lista-clientes";
import { ViewListaCliente } from "./app/ui/console/views/view-lista-clientes";

const app: Application = new Application(
  new ViewListaCliente(
    new ListaClientes(new ClienteService(new Cliente(new ClienteMessage())))
  )
);

app.startApp();


