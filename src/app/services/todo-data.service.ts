import { TodoItem } from '../components/todos/Models';
import { BehaviorSubject, of, Observable } from 'rxjs';

export class TodoDataService {
  private subject: BehaviorSubject<TodoItem[]>;
  private data: TodoItem[] = [
    { id: '3', description: 'Sell Stuff', completed: false },
    { id: '4', description: 'Learn Piano More Better', completed: true }
  ];
  id = 4;

  constructor() {

    this.subject = new BehaviorSubject<TodoItem[]>(this.data);
  }

  getTodos(): Observable<TodoItem[]> {
    return this.subject.asObservable();
  }

  addTodoItem(description: string) {
    // call teh api to add the item or whatever
    this.id++;
    const newItem: TodoItem = {
      id: this.id.toString(),
      description,
      completed: false
    };
    this.data = [newItem, ...this.data];
    this.subject.next(this.data);
  }

  markComplete(item: TodoItem) {
    // call the api to mark the item as complete..
    const originalItem = this.data.find(d => d.id === item.id);
    originalItem.completed = true;
    this.subject.next(this.data);
  }
}

