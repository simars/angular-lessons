import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxLessonNgforTrackbyModule} from '../../projects/ngx-lesson-ngfor-trackby/src/lib/ngx-lesson-ngfor-trackby.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLessonNgforTrackbyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
