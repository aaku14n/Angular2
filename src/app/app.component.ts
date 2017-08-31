import { Component } from "@angular/core";
import { MailService } from "app/mail.service";

export class Users {
  id: number;
  name: string;
}

const users: Users[] = [
  { id: 1, name: "Aakarsh Yadav" },
  { id: 2, name: "Manav Yadav" },
  { id: 3, name: "Nirbhay Yadav" },
  { id: 4, name: "Rocky Yadav" },
  { id: 5, name: "Rocky Yadav" },
  { id: 6, name: "Rocky Yadav" },
  { id: 7, name: "Nisha Yadav" },
  { id: 8, name: "Nisha Yadav" },
  { id: 9, name: "Nisha Yadav" },
  { id: 0, name: "Aakarsh Yadav" }
];

@Component({
  selector: "app-root",
  template: `<div>
  <app-simple-form></app-simple-form>
  {{mail.message}}
  <br />
  <input type="text" #ref (change)="main(ref.value)"/>
  <ul>
  <li *ngFor="let user of Users">
  <span>{{user.id}}</span> {{user.name}}
  </li>
  </ul>
  </div>`
})
export class AppComponent {
  title = "app works!";

  constructor(private mail: MailService) {
    let Users = [
      { id: 1, name: "Aakarsh Yadav" },
      { id: 2, name: "Manav Yadav" },
      { id: 3, name: "Nirbhay Yadav" },
      { id: 4, name: "Rocky Yadav" },
      { id: 5, name: "Rocky Yadav" },
      { id: 6, name: "Rocky Yadav" },
      { id: 7, name: "Nisha Yadav" },
      { id: 8, name: "Nisha Yadav" },
      { id: 9, name: "Nisha Yadav" },
      { id: 0, name: "Aakarsh Yadav" }
    ];
  }
  main(value) {
    Users.push({ id: 10, name: value });
  }
}
