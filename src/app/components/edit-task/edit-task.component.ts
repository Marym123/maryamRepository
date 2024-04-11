import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit{
  taskId: any;
  task: any;
  constructor(private route: ActivatedRoute, private taskService : TasksService , private router : Router){}
  ngOnInit(): void
  {this.taskId = this.route.snapshot.paramMap.get('id');
   this.task = this.taskService.tasks [this.taskId];
  }
  
  editTask()
  {
    this.taskService.editTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }
}
