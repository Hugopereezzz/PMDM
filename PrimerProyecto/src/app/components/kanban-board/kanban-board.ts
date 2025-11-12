import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban-board',
  imports: [CdkDropList,CdkDrag, FormsModule],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  doing = ['Buenos dias', 'Buenas tardes', 'Buenas noches']

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  newTask: string = '';
  selectedList: string = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask() {
    if (!this.newTask.trim() || !this.selectedList) return;

    (this as any)[this.selectedList].push(this.newTask.trim());
    this.newTask = '';
    this.selectedList = '';
  }

  removeTask(listName: string, item: string) {
  const arr = (this as any)[listName] as string[] | undefined;
  if (!arr) return;
  const idx = arr.indexOf(item);
  if (idx > -1) {
    arr.splice(idx, 1);
  }
}

}
