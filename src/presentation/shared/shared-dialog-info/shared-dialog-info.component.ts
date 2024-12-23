import { DialogModule } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-shared-dialog-info',
  standalone: true,
  imports: [   BrowserModule,
    BrowserAnimationsModule, // Obligatorio para PrimeNG
    DialogModule,
    ButtonModule ],
  templateUrl: './shared-dialog-info.component.html',
  styleUrl: './shared-dialog-info.component.scss'
})
export class SharedDialogInfoComponent {
  @Input() data: string = ''; // Recibir los datos del padre
  @Input() isVisible: boolean = false; // Controlar visibilidad del diálogo desde el padre
  @Output() dialogClose = new EventEmitter<void>(); // Notificar cierre del diálogo

  closeDialog() {
    this.isVisible = false;
    this.dialogClose.emit(); // Notificar al padre que se cerró el diálogo
  }
}
