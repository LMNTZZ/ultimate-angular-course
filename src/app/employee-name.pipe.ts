import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  transform(value: Employee, args?: any): any {
    return `The salary of ${value.firstname} ${value.lastname} is €${value.salary}`;
  }

}
