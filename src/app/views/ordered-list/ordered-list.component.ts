import { Component, OnInit } from '@angular/core';
import { ListService } from '@core/services/list.service';

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.scss'],
})
export class OrderedListComponent implements OnInit {
  list: number[] = [];

  constructor(public ls: ListService) {}

  ngOnInit(): void {
    this.ls.list$.subscribe((arr: number[]) => {
      this.list = arr;
    });
  }
}
