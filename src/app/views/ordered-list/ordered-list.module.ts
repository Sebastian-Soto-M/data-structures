import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { OrderedListComponent } from './ordered-list.component';
import { ToQueueComponent } from './to-queue/to-queue.component';
import { FromListToStackComponent } from './to-stack/to-stack.component';

@NgModule({
  declarations: [
    FromListToStackComponent,
    OrderedListComponent,
    ToQueueComponent,
  ],
  imports: [SharedModule],
  exports: [OrderedListComponent],
})
export class OrderedListModule {}
