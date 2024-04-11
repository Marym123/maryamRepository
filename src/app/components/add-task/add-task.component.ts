import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
   constructor(private taskService:TasksService ,private router:Router){}
  saveTask(name:any,description:any,dueDate:any)
  {
    
    this.taskService.saveTask(name.value,description.value,dueDate.value,false);
    this.router.navigate(['/']);
  }
}
