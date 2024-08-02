import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-admin-firma-paz-salvo',
  templateUrl: './admin-firma-paz-salvo.component.html',
  styleUrls: ['./admin-firma-paz-salvo.component.scss'],
  standalone: true,
  imports: [
   // Asegúrate de que BrowserAnimationsModule está importado aquí
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,

  ]
})
export class AdminFirmaPazSalvoComponent implements OnInit {
  pazSalvoForm!: FormGroup;
  areas = ['Area 1', 'Area 2', 'Area 3'];
  personas = ['Persona 1', 'Persona 2', 'Persona 3'];
  displayedColumns: string[] = ['area', 'persona'];
  registros: any[] = [];
  dataSource: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.pazSalvoForm = this.fb.group({
      area: ['', Validators.required],
      persona: ['', Validators.required]
    });
  }

  agregarRegistro() {
    if (this.pazSalvoForm.valid) {
      this.registros.push(this.pazSalvoForm.value);
      this.dataSource = new MatTableDataSource(this.registros);
      this.pazSalvoForm.reset();
    }
  }

  generarPDF() {
    // Implementación de la generación del PDF
    const doc = new jsPDF();

    // Agrupar registros por área
    const groupedData = this.registros.reduce((acc, registro) => {
      (acc[registro.area] = acc[registro.area] || []).push(registro);
      return acc;
    }, {});

    let y = 10; // Posición Y inicial
    for (const area in groupedData) {
      doc.text(area, 10, y);
      y += 10;
      groupedData[area].forEach((registro:any , index:any )=> {
        doc.text(`Persona: ${registro.persona}`, 20, y);
        y += 10;
      });
    }

    doc.save('firma-paz-salvo.pdf');
  }
}
