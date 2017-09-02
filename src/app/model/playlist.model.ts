import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { PlayListComponent } from "../component/playlist.component";
import { PlayListHeader } from "../component/playlist.header";
@NgModule({
  declarations: [PlayListComponent, PlayListHeader],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [PlayListComponent],
  exports: [PlayListComponent]
})
export class playlistmodel {
  constructor() {}
}
