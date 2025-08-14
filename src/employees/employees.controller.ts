import { Controller, Param, Delete, Get, Patch, Post } from '@nestjs/common';


@Controller('employees')
export class EmployeesController {
  //endpoint: Destino de la request
  // Se escribe como una funcion en una clase controlador

  @Get()
  getEmployees():string {
    return "Aqui se podran consultar todos los empleados"

  }
  
  @Get(":id")
  getEmployeesById(@Param("id") id:string){
    return `Aqui se va a consultar empleado con id: ${ id }`
  }

  @Post()
  createEmployees():string{
    return ("Aqui se podran registrar empleados")
  }

  @Post(":id")
  createEmployeesById(@Param("id") id:string ){
    return `Aqui se podra crear empleado con id: ${ id }`
  }

  @Patch()
  updateEmployees():string{
    return ("Aqui se podran actualizar los empleados")
  }

  @Patch(":id")
  updateEmployeesById(@Param("id") id:string){
    return `Aqui se va a actualizar empleado con id: ${ id }`
  }

  @Delete()
  deleteEmployees():string{
    return ("Aqui se podran eliminar los empleados")
  }

  @Delete(":id")
  deleteEmployeesById(@Param("id") id:string){
    return (`Aqui se eliminara empleado con id ${ id }`)
  }
}
