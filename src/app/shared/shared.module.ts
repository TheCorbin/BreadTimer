import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
// import { BackRouteResolver } from './resolvers/back-route.resolver';

@NgModule({
  imports: [ComponentsModule,
            PipesModule
           ],
  exports: [ComponentsModule,
            PipesModule
           ],
  providers: []
})
export class SharedModule {}
