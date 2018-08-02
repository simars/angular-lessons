import { TestBed, inject } from '@angular/core/testing';

import { NgxLessonNgforTrackbyService } from './ngx-lesson-ngfor-trackby.service';

describe('NgxLessonNgforTrackbyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxLessonNgforTrackbyService]
    });
  });

  it('should be created', inject([NgxLessonNgforTrackbyService], (service: NgxLessonNgforTrackbyService) => {
    expect(service).toBeTruthy();
  }));
});
