import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaParent : EventEmitter<string> = new EventEmitter();
  createOnomatopia(): void{
  
    console.log('submit')
    this.sendOnomatopiaParent.emit(this.newOnomatopia)
  
  
  }
  
  }
