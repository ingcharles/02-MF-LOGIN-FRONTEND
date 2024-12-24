import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-shared-dialog-info',
  standalone: true,
  imports: [
    Dialog,
    ButtonModule ],
  templateUrl: './shared-dialog-info.component.html',
  styleUrl: './shared-dialog-info.component.scss'
})
export class SharedDialogInfoComponent {
  @Input() title: string = '';
  @Input() data: string = '';
  @Input() isVisible: boolean = false;
  @Output() dialogClose = new EventEmitter<void>();

  closeDialog() {
    this.isVisible = false;
    this.dialogClose.emit();
  }
}
