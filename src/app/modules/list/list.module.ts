import { NgModule } from '@angular/core';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent,
    FilterPipe
  ],
  imports: [
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
