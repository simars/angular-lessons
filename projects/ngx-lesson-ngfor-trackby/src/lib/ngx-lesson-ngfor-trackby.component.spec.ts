import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLessonNgforTrackbyComponent } from './ngx-lesson-ngfor-trackby.component';

describe('NgxLessonNgforTrackbyComponent', () => {
  let component: NgxLessonNgforTrackbyComponent;
  let fixture: ComponentFixture<NgxLessonNgforTrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLessonNgforTrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLessonNgforTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
