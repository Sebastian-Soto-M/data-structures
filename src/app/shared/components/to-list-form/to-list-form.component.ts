import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from '@core/services/list.service';
import { IMoveData } from '@models/data-structure.model';

@Component({
  selector: 'app-to-list-form',
  templateUrl: './to-list-form.component.html',
  styleUrls: ['./to-list-form.component.scss'],
})
export class ToListFormComponent implements OnInit {
  @Output() actionEmitter = new EventEmitter<void>();
  @Input() fromStructure!: IMoveData<number>;

  constructor(private ls: ListService) {}

  ngOnInit(): void {}

  exchange(): void {
    this.fromStructure.sendToDataStructure(this.ls.list);
    this.ls.refresh();
    this.actionEmitter.emit();
  }
}
