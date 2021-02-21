import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../models/item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IItem[], searchValue: string): IItem[] {
    if (!searchValue) return value;
    return value.filter((v) => v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.body.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }
}
