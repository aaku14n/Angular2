import { Component } from "@angular/core";
import { Video } from "./component/videos.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Aaku yadav";
  videos: Array<Video>;
  constructor() {
    this.videos = [
      new Video(1, "Aaku yadav", "sdaffadfSAasdf", true),
      new Video(2, "MAnav", "sOPSdaffadfSAasdf", true),
      new Video(3, "Aaku ", "JSAsdaffadfSAasdf", true),
      new Video(4, "Aaku yadav ji", "ghfghASKf", false)
    ];
  }
}
