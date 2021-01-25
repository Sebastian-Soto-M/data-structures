import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '@core/services/list.service';
import { QueueService } from '@core/services/queue.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-queue',
  templateUrl: './to-queue.component.html',
  styleUrls: ['./to-queue.component.scss'],
})
export class ToQueueComponent implements OnInit {
  toMove = new FormControl();
  options: number[];
  filteredOptions: Observable<number[]>;

  constructor(private ls: ListService, private qs: QueueService) {}

  ngOnInit() {
    this.ls.list$.subscribe((next) => {
      this.options = next;
    });
    this.filteredOptions = this.toMove.valueChanges.pipe(
      map((value: number) => this._filter(value))
    );
  }

  private _filter(value: number): number[] {
    return this.options.filter((option) => {
      option.toString().includes(value.toString());
    });
  }

  exchange(): void {
    this.ls.exchange(this.qs.queue, +this.toMove.value);
    this.qs.refresh();
    this.ls.refresh();
  }
}
