import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormFieldComponent,
    ButtonComponent,
  ],
})
export class SearchModule {}