import { Injectable } from '@angular/core';
import {Task} from './task';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
// Math.floor(Math.random() * (max - min)) + min;
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http: HttpClient) { }
  URL = 'http://84.201.147.111:8015/api/olympiads/get-examples/';

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  getTask(): Observable<Task> {
    return this.http.get<Task>(this.URL);
  }

  randomTaskGenerator(num: number): Task {
    const arr: number[][] = [];
    let x: number[] = [];
    for (let i = 0; i < 20; i++){
      for (let j = 0; j < 5; j++){
        x.push(this.getRandomInt(-100, 100));
      }
      arr.push(x);
      x = [];
    }
    const ans: Task = {
      task: num,
      examples: arr
    };
    return ans;
  }
}
