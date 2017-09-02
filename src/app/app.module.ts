import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { playlistmodel } from "./model/playlist.model";

import { AppComponent } from "./app.component";
import { PlayListComponent } from "./component/playlist.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule, playlistmodel],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
