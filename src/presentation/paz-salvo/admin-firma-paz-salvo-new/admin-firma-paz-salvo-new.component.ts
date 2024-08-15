import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
interface Registro {
  area: string;
  persona: string;
}

@Component({
  selector: 'app-admin-firma-paz-salvo-new',
  standalone: true,
  templateUrl: './admin-firma-paz-salvo-new.component.html',
  styleUrl: './admin-firma-paz-salvo-new.component.scss',
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      TableModule,
      DropdownModule,
      CardModule,
      PanelModule,
      InputTextModule,
      ButtonModule,
      FloatLabelModule,
      StyleClassModule
    ]
})
export class AdminFirmaPazSalvoNewComponent implements OnInit {
  pazSalvoForm!: FormGroup;
  areas = ['Area 1', 'Area 2', 'Area 3'];
  personas = ['Persona 1', 'Persona 2', 'Persona 3'];
  displayedColumns: string[] = ['area', 'persona'];
  registros: any[] = [];
  dataSource: any;
  groupedData!: MatTableDataSource<any>;
  groupedData1: any[] = [];
  groupedData2: { area: string, registros: Registro[] }[] = [];
  constructor(private fb: FormBuilder) { }

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
      this.actualizarDatosAgrupados();
      this.pazSalvoForm.reset();
    }
  }
  actualizarDatosAgrupados() {
    // const groupedData = this.registros.reduce((acc, registro) => {
    //   if (!acc[registro.area]) {
    //     acc[registro.area] = { isGroup: true, area: registro.area, personas: [] };
    //   }
    //   acc[registro.area].personas.push(registro.persona);
    //   return acc;
    // }, {} as Record<string, { isGroup: boolean; area: string; personas: string[] }>);

    // const dataWithHeaders = [];
    // for (const group of Object.values(groupedData)) {
    //   dataWithHeaders.push(group);
    // }

    // this.groupedData = new MatTableDataSource(dataWithHeaders);
    const groupedData = this.registros.reduce((acc, registro) => {
      (acc[registro.area] = acc[registro.area] || []).push(registro);
      return acc;
    }, {});
    const dataWithHeaders = [];
    for (const [area, registros] of Object.entries(groupedData)) {
      dataWithHeaders.push({ isGroup: true, area: area }); // Encabezado del grupo
      dataWithHeaders.push(registros); // Registros del grupo

    }
    this.groupedData1 = dataWithHeaders;

    this.groupedData = new MatTableDataSource(dataWithHeaders);



    const grouped = this.registros.reduce((acc, registro) => {
      const areaGroup = acc.find((group: any) => group.area === registro.area);
      if (areaGroup) {
        areaGroup.registros.push(registro);
      } else {
        acc.push({ area: registro.area, registros: [registro] });
      }
      return acc;
    }, [] as { area: string, registros: Registro[] }[]);

    this.groupedData2 = grouped;
  }

  // generarPDF() {
  //   // Implementación de la generación del PDF
  //   const doc = new jsPDF();

  //   // Agrupar registros por área
  //   const groupedData = this.registros.reduce((acc, registro) => {
  //     (acc[registro.area] = acc[registro.area] || []).push(registro);
  //     return acc;
  //   }, {});

  //   doc.setFontSize(10);
  //   let y = 10; // Posición Y inicial
  //   for (const area in groupedData) {
  //     doc.text(area, 10, y);
  //     y += 20;
  //     groupedData[area].forEach((registro: any, index: any) => {
  //       doc.text(`Persona: ${registro.persona}`, 20, y);
  //       doc.rect(50, y, 50, 40); // (x, y, width, height)
  //       y += 20;
  //     });
  //   }

  //   doc.save('firma-paz-salvo.pdf');
  // }
  // generarPDF() {
  //   const doc = new jsPDF({
  //     orientation: 'landscape',
  //     unit: 'pt',
  //     format: 'a4'
  //   });

  //   doc.setFontSize(10);
  //   let y = 50; // Posición inicial Y en el documento

  //   // Definir encabezados
  //   const headers = ['','SÍ', 'NO', 'Nombre del Responsable', 'Firma del Responsable'];
  //   const columnWidths = [150, 50, 50, 150, 150]; // Ancho de cada columna
  //   const columnPositions = [100,14, 70, 120, 270]; // Posiciones X para cada columna



  //   // Agrupar registros por área
  //   const groupedData = this.registros.reduce((acc, registro) => {
  //     (acc[registro.area] = acc[registro.area] || []).push(registro);
  //     return acc;
  //   }, {});

  //   // Iterar sobre cada grupo
  //   Object.keys(groupedData).forEach(area => {
  //     y += 10;
  //     doc.rect(14, y, 480, 20); // Borde del área del grupo
  //     doc.text(area, 14, y + 15); // Nombre del área
  //     y += 20;

  //     // Dibuja encabezados y sus bordes
  //     doc.setFontSize(10);
  //     headers.forEach((header, i) => {
  //       const x = columnPositions[i];

  //       doc.text(header, x + 5, y + 15); // Texto del encabezado
  //       doc.rect(x, y, columnWidths[i], 20); // Borde del encabezado
  //     });
  //     y += 20; // Espacio debajo del encabezado
  //     // // Dibuja encabezados
  //     // headers.forEach((header, i) => {
  //     //   const x = columnPositions[i];
  //     //   doc.rect(x, y, columnWidths[i], 20); // Borde del encabezado
  //     //   doc.text(header, x + 5, y + 15); // Texto del encabezado
  //     // });
  //     // y += 15; // Espacio debajo del encabezado
  //     groupedData[area].forEach((registro: any, index: any) => {
  //       // doc.rect(14, y, 50, 20); // Caja para la sección
  //       // doc.text(`Persona: ${registro.persona}`, 20, y + 8); // Descripción
  //       //doc.rect(x, y, columnWidths[i], 20); // Borde de cada celda
  //       // Dibuja casillas de verificación y campos de texto
  //       columnPositions.forEach((x, i) => {

  //         if (i == 0) { // Casillas de verificación para SÍ y NO
  //           //if (registro.persona) {
  //           doc.text('item', x + 3, y + 15); // Marca la casilla, si aplica
  //           //}
  //         }
  //         if (i == 1 || i == 2) { // Casillas de verificación para SÍ y NO
  //           //doc.rect(x, y, columnWidths[i], 20); // Dibuja la casilla de verificación
  //           //if (registro.persona) {
  //           doc.text('X', x + 3, y + 15); // Marca la casilla, si aplica
  //           //}
  //         } else if (i === 3) {
  //           doc.text(registro.persona || '', x, y + 15); // Texto para nombre
  //         } else if (i === 4) {
  //           doc.text('Firma', x, y + 15); // Texto para firma
  //         }
  //         doc.rect(x, y, columnWidths[i], 20); // Dibuja la casilla de verificación

  //       });


  //       y += 20; // Espacio para la siguiente línea
  //       console.log("y", y)
  //       if (y > 250) { // Control de flujo de página
  //         doc.addPage();
  //         y = 50;
  //         // Redibuja los encabezados en la nueva página
  //         headers.forEach((header, i) => {
  //           const x = columnPositions[i];
  //           doc.rect(x, y, columnWidths[i], 20); // Borde del encabezado
  //           doc.text(header, x + 5, y + 15); // Texto del encabezado
  //         });
  //         y += 20; // Espacio debajo del encabezado
  //       }
  //     });
  //   });

  //   // Guardar el PDF
  //   doc.save('informe-administrativo.pdf');
  // }
  generarPDF() {
    const doc = new jsPDF({
     // orientation: 'landscape',
      unit: 'pt',
      format: 'a4'
    });


    let y = 50; // Posición inicial Y en el documento

    // Definir encabezados
    const headers = ['', 'SÍ', 'NO', 'Nombre del Responsable', 'Firma del Responsable'];
    const columnWidths = [200, 40, 40, 150, 120]; // Ancho de cada columna
    const columnPositions = [25, 225, 265, 305, 455]; // Posiciones X para cada columna

    // Agrupar registros por área
    const groupedData = this.registros.reduce((acc, registro) => {
      (acc[registro.area] = acc[registro.area] || []).push(registro);
      return acc;
    }, {});

    // Función para dibujar encabezados
    const drawHeaders = () => {
      headers.forEach((header, i) => {
        const x = columnPositions[i];
        doc.rect(x, y, columnWidths[i], 20); // Borde del encabezado
        doc.text(header, x + 5, y + 15); // Texto del encabezado
      });
      y += 20; // Espacio debajo del encabezado
    };

    // Iterar sobre cada grupo
    Object.keys(groupedData).forEach(area => {
      doc.setFontSize(12);
      // Dibuja área del grupo
      doc.rect(25, y, 550, 20); // Borde del área del grupo
      doc.text(area, 25, y + 15); // Nombre del área
      y += 20;
      doc.setFontSize(8);
      // Dibuja encabezados
      drawHeaders();

      // Dibuja datos
      groupedData[area].forEach((registro: any) => {
        columnPositions.forEach((x, i) => {
          if (i === 0) { // Casilla para item
            doc.text('item', x + 3, y + 15); // Texto de item
          } else if (i === 1 || i === 2) { // Casillas de verificación para SÍ y NO
            doc.text('X', x + 3, y + 15); // Marca la casilla
          } else if (i === 3) {
            doc.text(registro.persona || '', x + 5, y + 15); // Texto para nombre
          } else if (i === 4) {
            doc.text('Firma', x + 5, y + 15); // Texto para firma
          }
          doc.rect(x, y, columnWidths[i], 40); // Borde de cada celda
        });

        y += 40; // Espacio para la siguiente línea

        // Control de flujo de página
        if (y > 250) {
          doc.addPage();
          y = 50;
          drawHeaders(); // Redibuja los encabezados en la nueva página
        }
      });
    });

    // Guardar el PDF
    doc.save('informe-administrativo.pdf');
  }
}
