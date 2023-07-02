import { ICliente } from "../interfaces/cliente-interface";
import { TCliente } from "../models/cliente-type";
import  data  from "../../../assets/data/clientes.json";

export class Cliente implements ICliente{
  private clientes:TCliente[] = [];
  private cliente:TCliente[];
    
  verClientes(): void {
    this.clientes = data.clientes
    this.clientes.forEach(clientes=>{
      console.table(clientes);
    })
  }

  agregarCliente(cliente: TCliente): void {
    this.clientes.push(cliente);
  }

  clienteCedula(cedula: number): void {
    let find = this.clientes.some((cliente)=>{
      return cliente.cedula == cedula;
    });
    if(find){
      this.cliente = this.clientes.filter((cliente)=>{
        return cliente.cedula == cedula;
      })
      console.table(this.cliente[0]);
    }else{
      "La cedula de la persona ingresada no se encuentra registrada";
    }
  }

  actualizarCliente(cliente: TCliente): void {
    throw new Error("Method not implemented.");
  }
  
}
