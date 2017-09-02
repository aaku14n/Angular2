export class Video {
  id: number;
  title: string;
  videoCode: string;
  complete: boolean;
  constructor(id: number, title: string, videoCode: string, complete: boolean) {
    this.id = id;
    this.title = title;
    this.videoCode = videoCode;
    this.complete = complete;
  }
}
