import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { OrderedListModule } from './ordered-list/ordered-list.module';
import { StackModule } from './stack/stack.module';
import { QueueModule } from './queue/queue.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, OrderedListModule, StackModule, QueueModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
