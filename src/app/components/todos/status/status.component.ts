import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../Models';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class STATUSComponent implements OnInit {
  @Input() items$: Observable<TodoItem[]>;
  status$: Observable<StatusInfo>;

  constructor() { }

  ngOnInit() {
    this.status$ = this.items$.pipe(
      map(makeStatus)
    );
  }

}

interface StatusInfo {
  totalTodos: number;
  incompleteTodos: number;
}

function makeStatus(items: TodoItem[]) {
  return {
    totalTodos: items.length,
    incompleteTodos: items.filter(item => item.completed === false).length
  } as StatusInfo;
}
