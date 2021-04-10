import { Injectable } from '@angular/core';
import {Task} from './task';

// Math.floor(Math.random() * (max - min)) + min;
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  randomTaskGenerator(num: number): Task {
    const arr: number[][] = [[]];
    let x: number[] = [];
    for (let i = 0; i < 10; i++){
      for (let j = 0; j < 5; j++){
        x.push(this.getRandomInt(-100, 100));
      }
      arr.push(x);
      x = [];
    }
    const ans: Task = {
      id: num,
      examples: arr
    };
    return ans;
  }
}
