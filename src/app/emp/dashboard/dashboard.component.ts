import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {FormsModule} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent ,MatIconModule,CommonModule,MatCheckboxModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  lastMonthsIncome =  ['Jan: $2000', 'Feb: $2000', 'Mar: $2000', 'Apr: $2000'];
  currentMonthIncome = '$2000';

  lastMonthsExpense = ['Jan : $500','Feb : $200','Mar : $1200','Apr :$700'];
  currentMonthExpense = '$300';

  lastMonthsSavings = ['Jan : $200','Feb : $500','Mar : $600','Apr :$700'];
  currentMonthsSavings ='$700';

  todolist = ['Food','Exercise']
  task: Task = {
    name: 'Daily schedule',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Yoga', completed: false, color: 'primary'},
      {name: 'Coding', completed: false, color: 'accent'},
      {name: 'DSA', completed: false, color: 'warn'},
    ],
  };
  onIncome(){

  }
  onExpense(){

  }
  onTodo(){

  }
  onSavings(){

  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }


  
}

