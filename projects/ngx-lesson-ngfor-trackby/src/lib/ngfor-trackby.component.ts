import {Component, OnDestroy, OnInit} from '@angular/core';

interface Item { id: number; name: string; color: string; }

@Component({
  selector: 'ngx-lesson-ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
  styleUrls: ['./ngfor-trackby.component.css']
})
export class NgforTrackbyComponent implements OnDestroy {

  values = ['', '', '']; // values bound to input boxes
  items: Item[]; // item to *ngFor without trackby
  itemsMock: Item[][]; // Array Mock item array to toggle between
  toggle: boolean;
  intervalTimer: any;

  constructor() {
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

    this.items = this.itemsMock[0];

    this.toggle = false;
    this.intervalTimer = setInterval(() => {
      this.toggleItems();
    }, 5000);
  }

  toggleItems() {
    this.toggle = !this.toggle;
    this.items = this.toggle ? this.itemsMock[1] : this.itemsMock[0];
  }

  trackByFn(index, item ) {
    console.log( 'TrackBy:', item.id, 'at index', index );
    return( item.id );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalTimer);
  }

}
