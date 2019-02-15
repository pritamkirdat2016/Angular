import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { MagicDirDirective } from './directive/magic-dir.directive';
import { MagicBoxDirective } from './directive/magic-box.directive';
import { ImageZoomDirective } from './directive/image-zoom.directive';
import { StructuralDirDirective } from './directive/structural-dir.directive';

import { InfoCardComponent } from './directive/info-card.component';
import { SwitchComponent } from './ngSwitch/switch/switch.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    MagicDirDirective,
    MagicBoxDirective,
    ImageZoomDirective,
    StructuralDirDirective,
    InfoCardComponent,
    SwitchComponent,
    CalculatorComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
