import { Customer } from "../models/customer-type";

export interface ICustomer {
  showCustomer(): Customer[];
  addCustomer(customer: Customer): void;
  customerIdNumber(id: number): void;
  updateCustomer(customer: Customer):void;
}
