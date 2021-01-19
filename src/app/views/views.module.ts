import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { OrderedListComponent } from './ordered-list/ordered-list.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  declarations: [HomeComponent, OrderedListComponent, StackComponent, QueueComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
