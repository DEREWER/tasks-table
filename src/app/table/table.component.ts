import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Observable, of} from 'rxjs';
import {Task} from '../task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  tasks: Task[];
  rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  taskNumbers: number[] = [1, 2, 3, 4, 5];
  symbols: string[] = ['=', '+/-'];

  ngOnInit(): void {
    this.tasks = [
      this.tasksService.randomTaskGenerator(1),
      this.tasksService.randomTaskGenerator(2)
    ];
  }

}
