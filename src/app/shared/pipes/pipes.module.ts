import { NgModule } from '@angular/core';

import {
  HoursMinutesSecondsPipe
} from './';

@NgModule({
  declarations: [
    HoursMinutesSecondsPipe
  ],
  exports: [
    HoursMinutesSecondsPipe
  ]
})
export class PipesModule {}
