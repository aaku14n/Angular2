import { Component } from "@angular/core";
@Component({
  selector: "playlist",
  templateUrl: "../view/playlist.html",
  inputs: ["video"],
  styles: [
    `
  .mainTable{
    background-color: rgba(50, 145, 235, 0.52);
    width: -webkit-fill-available;
    font-size: 17px;
    font-family: monospace;
    font-weight: 400;
    color: royalblue;
    border: solid 2px rgba(163, 166, 187, 0.48);
    border-radius: 5px;
  }
  .tableHead{
    background-color: rgba(7, 51, 142, 0.75);
    color: white;
    font-weight: bolder;
    font-family: cursive;
  }
  `
  ]
})
export class PlayListComponent {
  name: string = "";
  constructor() {
    this.name = "Aakarsh";
  }
}
