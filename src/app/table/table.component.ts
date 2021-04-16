import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from '../task';
import {NgxQrcodeElementTypes} from 'ngx-qrcode2';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

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
  tas: any;
  x: any;

  ngOnInit(): void {
    this.tasksService.getTask().subscribe(val => {
      console.log(val);
      this.tas = val;
      this.value = String(this.tas);
      this.tasks = [
        {
          task: this.tas.task,
          examples: this.tas.examples.slice(0, 10)
        },
        {
          task: this.tas.task,
          examples: this.tas.examples.slice(10)
        }
      ];
    });
    // console.log(this.x);
    // this.tas = this.tasksService.randomTaskGenerator(1);
  }

}
