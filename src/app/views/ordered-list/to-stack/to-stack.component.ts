import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '@core/services/list.service';
import { StackService } from '@core/services/stack.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-stack',
  templateUrl: './to-stack.component.html',
  styleUrls: ['./to-stack.component.scss'],
})
export class FromListToStackComponent implements OnInit {
  toMove = new FormControl();
  options: number[];
  filteredOptions: Observable<number[]>;

  constructor(private ls: ListService, private ss: StackService) {}

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
    this.ls.exchange(this.ss.stack, +this.toMove.value);
    this.ss.refresh();
    this.ls.refresh();
  }
}
