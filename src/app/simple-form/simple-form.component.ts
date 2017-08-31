import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-form",
  template: `

    <input type="text" #ref>
    <button (mouseover)="clickMe($event,ref.value)" >ClickMe</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {}
  clickMe(event, value) {
    console.log(event);
    console.log(value);
  }
  ngOnInit() {}
}
