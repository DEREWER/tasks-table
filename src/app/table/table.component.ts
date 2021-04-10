import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from '../task';
import {NgxQrcodeElementTypes} from 'ngx-qrcode2';

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
  elementType = NgxQrcodeElementTypes.URL;
  value: string;

  ngOnInit(): void {
    const task = this.tasksService.randomTaskGenerator(1);
    this.value = String(task.identifier);
    this.tasks = [
      {
        id: task.id,
        examples: task.examples.slice(0, 10),
        identifier: task.identifier
      },
      {
        id: task.id + 1,
        examples: task.examples.slice(10),
        identifier: task.identifier
      }
    ];
  }

}
