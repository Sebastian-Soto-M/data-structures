import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { OrderedListModule } from './ordered-list/ordered-list.module';

@NgModule({
  declarations: [HomeComponent, StackComponent, QueueComponent],
  imports: [SharedModule, OrderedListModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
