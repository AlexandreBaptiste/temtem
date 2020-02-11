import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TemtemService } from './Service/temtem.service';
import { WeaknessesMatrixComponent } from './weaknesses-matrix/weaknesses-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaknessesMatrixComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TemtemService],
  bootstrap: [AppComponent]
})

export class AppModule { }
