import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photos = [];

  constructor() {
    this.photos = [
      {name: "Image 1", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undeillum nesciunt voluptates nulla. Quia consectetur minus aspernatur voluptate rerum acilis omnis eaque? Excepturi velit officiis nem numquam. Rem, incidunt blanditiis", url:"https://picsum.photos/id/21/500"},
      {name: "Image 2", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undeillum nesciunt voluptates nulla. Quia consectetur minus aspernatur voluptate rerum acilis omnis eaque? Excepturi velit officiis nem numquam. Rem, incidunt blanditiis", url:"https://picsum.photos/id/22/500"},
      {name: "Image 3", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undeillum nesciunt voluptates nulla. Quia consectetur minus aspernatur voluptate rerum acilis omnis eaque? Excepturi velit officiis nem numquam. Rem, incidunt blanditiis", url:"https://picsum.photos/id/23/500"},
      {name: "Image 4", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Undeillum nesciunt voluptates nulla. Quia consectetur minus aspernatur voluptate rerum acilis omnis eaque? Excepturi velit officiis nem numquam. Rem, incidunt blanditiis", url:"https://picsum.photos/id/24/500"}
    ]
  }

}
