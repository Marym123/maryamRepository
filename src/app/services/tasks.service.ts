import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
 tasks: Task[]=[
  {
    name:"hci"
   ,description:"hciiii",
    dueDate:"4/5/2024",
    checked: false
  },
  {
    name:"mariam",
    description:"mariammm",
    dueDate:"1/1/2025",
    checked: false
  }
 ]
  constructor() { }
  deletetask(i:number)
  {
    this.tasks.splice(i,1);
  }
  saveTask(name:any,description:any,dueDate:any,checked:boolean)
  {
    this.tasks.push(
      {
      name,
      description,
      dueDate,
      checked 
      }
    );
  }
  editTask(id:any,item:any)
  {
    this.tasks[id]=item;
  }
 
  }
