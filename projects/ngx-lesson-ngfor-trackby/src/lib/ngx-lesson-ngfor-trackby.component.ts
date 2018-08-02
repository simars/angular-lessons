import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-lesson-ngfor-trackby',
  templateUrl: './ngx-lesson-ngfor-trackby.component.html',
  styleUrls: ['./ngx-lesson-ngfor-trackby.component.css']
})
export class NgxLessonNgforTrackbyComponent {

  name = 'Angular | *ngFor with trackBy';
  counter: boolean;
  itemsMock: { id: number; name: string; color: string; }[][];
  items: any;
  itemsTrackBy: any;

  constructor() {
    this.counter = false;
    this.itemsMock = [
      [
        {id: 1, name: 'One', color: 'red'},
        {id: 2, name: 'Two', color: 'blue'},
        {id: 3, name: 'Three', color: 'green'}
      ],
      [
        {id: 1, name: 'Uno', color: 'blue'},
        {id: 2, name: 'Dos', color: 'green'},
        {id: 3, name: 'Tres', color: 'red'}
      ]
    ];

    let itemsToggle = this.getItems();
    this.items = itemsToggle;
    this.itemsTrackBy = itemsToggle;

    setInterval(() => {
      itemsToggle = this.getItems();
      this.items = itemsToggle;
      this.itemsTrackBy = itemsToggle;
    }, 5000);
  }

  getItems() {
    if (this.counter === false) {
      this.counter = true;
      return this.itemsMock[0];
    }
    this.counter = false;
    return this.itemsMock[1];
  }

  trackByFn(index, item ) {
    console.log( 'TrackBy:', item.item, 'at index', index );
    return( item.id );
  }

}
