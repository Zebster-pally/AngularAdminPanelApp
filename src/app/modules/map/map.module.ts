import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    MapRoutingModule,
    SharedModule
  ]
})
export class MapModule { }
