import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		ReactiveFormsModule,
    ButtonModule,
		InputTextModule,
		FieldsetModule,
		CardModule,
		InputMaskModule,
		InputSwitchModule,
		TooltipModule,
		CalendarModule,
		InputNumberModule,
		DropdownModule,
		FloatLabelModule,
    MultiSelectModule
  ],
  exports: [
    CommonModule,
		ReactiveFormsModule,
    ButtonModule,
		InputTextModule,
		FieldsetModule,
		CardModule,
		InputMaskModule,
		InputSwitchModule,
		TooltipModule,
		CalendarModule,
		InputNumberModule,
		DropdownModule,
		FloatLabelModule,
    MultiSelectModule
  ]
})
export class SharedCreateModule { }
