import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { StackComponent } from './stack.component';
import { ToQueueComponent } from './to-queue/to-queue.component';

@NgModule({
  declarations: [ToQueueComponent, StackComponent],
  imports: [SharedModule],
  exports: [StackComponent],
})
export class StackModule {}
