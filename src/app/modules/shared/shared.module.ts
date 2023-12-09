import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { CardColorComponent } from './card-color/card-color.component';

@NgModule({
  declarations: [ButtonComponent, CardColorComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
