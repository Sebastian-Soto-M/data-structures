import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { OrderedListComponent } from './ordered-list/ordered-list.component';

@NgModule({
  declarations: [HomeComponent, OrderedListComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class ViewsModule {}
