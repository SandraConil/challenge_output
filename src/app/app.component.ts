import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-output';

//1. onomatopoeiaList est une propriéte de type string et tableau 
  onomatopoeiaList: string[] = [];
  
  //2. onReceiveNewOnomatopia() est une méthode de type void
  onReceiveNewOnomatopia(event: string):void{
    console.log(event)
    this.onomatopoeiaList.push(event)
    console.log(this.onomatopoeiaList)

}

}
