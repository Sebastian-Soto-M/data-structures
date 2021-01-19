import { Component, OnInit } from '@angular/core';
import { ListService } from '@core/services/list.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  list: number[] = [];

  constructor(public ls: ListService) {}

  ngOnInit(): void {
    this.ls.list$.subscribe((arr: number[]) => {
      this.list = arr;
    });
  }
}
