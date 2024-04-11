import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { AnyMxRecord } from 'dns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public tasksService:TasksService){}
deleteTask(i:number)
{
  this.tasksService.deletetask(i);
}

}
