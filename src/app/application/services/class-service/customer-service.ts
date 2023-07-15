import { Customer } from "../../../domain/models/customer-type";
import { ICustomerService } from "../interface-service/customer-interface-service";
import data from "../../../../assets/data/customers.json";

export class CustomerService implements ICustomerService {
  private customers: Customer[] = [];
  
  showCustomer(): Customer[] {
    this.customers = data.customers;
    return this.customers;
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  customerIdNumber(id: number): void {
    throw new Error("Method not implemented.");
  }

  updateCustomer(customer: Customer): void {
    throw new Error("Method not implemented.");
  }
}



// clienteCedula(cedula: number): void {
//   let find = this.clientes.some((cliente) => {
//     return cliente.cedula == cedula;
//   });
//   if (find) {
//     this.cliente = this.clientes.filter((cliente) => {
//       return cliente.cedula == cedula;
//     });
//     console.table(this.cliente[0]);
//   } else {
//     this.cliente_msn.mostrarMsn(EClienteMessage.CLIENTE_NO_REGISTRADO);
//   }
// }
