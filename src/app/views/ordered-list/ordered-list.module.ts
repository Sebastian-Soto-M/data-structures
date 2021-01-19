import { NgModule } from '@angular/core';
import { ToStackComponent } from './to-stack/to-stack.component';
import { SharedModule } from 'app/shared/shared.module';
import { OrderedListComponent } from './ordered-list.component';
import { ToQueueComponent } from './to-queue/to-queue.component';

@NgModule({
  declarations: [ToStackComponent, OrderedListComponent, ToQueueComponent],
  imports: [SharedModule],
  exports: [OrderedListComponent],
})
export class OrderedListModule {}
