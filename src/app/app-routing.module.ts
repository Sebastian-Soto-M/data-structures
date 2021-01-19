import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OrderedListComponent } from './views/ordered-list/ordered-list.component';
import { QueueComponent } from './views/queue/queue.component';
import { StackComponent } from './views/stack/stack.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { pageTitle: 'Home' } },
  {
    path: 'ordered-list',
    component: OrderedListComponent,
    data: { pageTitle: 'Ordered List' },
  },
  {
    path: 'stack',
    component: StackComponent,
    data: { pageTitle: 'Stack' },
  },
  {
    path: 'queue',
    component: QueueComponent,
    data: { pageTitle: 'Queue' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
