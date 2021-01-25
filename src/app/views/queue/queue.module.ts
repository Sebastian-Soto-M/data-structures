import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { QueueComponent } from './queue.component';
import { FromQueueToStackComponent } from './to-stack/to-stack.component';

@NgModule({
  declarations: [FromQueueToStackComponent, QueueComponent],
  imports: [SharedModule],
  exports: [QueueComponent],
})
export class QueueModule {}
