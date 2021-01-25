import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberFormComponent } from './components/number-form/number-form.component';
import {
  ListAmountChipComponent,
  QueueAmountChipComponent,
  StackAmountChipComponent,
} from '@components/chips/chips.component';
import { ToListFormComponent } from './components/to-list-form/to-list-form.component';

@NgModule({
  declarations: [
    NumberFormComponent,
    ListAmountChipComponent,
    QueueAmountChipComponent,
    StackAmountChipComponent,
    ToListFormComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    ListAmountChipComponent,
    MaterialModule,
    NumberFormComponent,
    QueueAmountChipComponent,
    ReactiveFormsModule,
    StackAmountChipComponent,
    ToListFormComponent,
  ],
})
export class SharedModule {}
