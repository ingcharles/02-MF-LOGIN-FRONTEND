
import { Component, Inject, AfterViewInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import jsPDF from 'jspdf';
import { IFirmaAreaItemAdminPazSalvoViewModel } from '../../../../domain/localizacion-prueba-uno/viewModels/i-firma-area-item-admin-paz-salvo.viewModel';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { IFirmaItemAdminPazSalvoViewModel } from '../../../../domain/localizacion-prueba-uno/viewModels/i-firma-item-admin-paz-salvo.viewModel';
@Component({
  selector: 'pdf-dialog-component',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, MatDialogModule],
  templateUrl: './pdf-dialog.component.html',
  styleUrl: './pdf-dialog.component.scss'
})

export class PdfDialogComponent implements AfterViewInit {
  pdfSrc: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  async ngAfterViewInit() {
   await this.generatePDF(this.data.firmasGuardadasPorArea, this.data.areas);
  }

  get theme(): string {
    return localStorage.getItem('ngx-extended-pdf-viewer.theme') || 'dark';
  }


  async generatePDF(firmasGuardadasPorArea: { [key: string]: any[] }, areas: IFirmaAreaItemAdminPazSalvoViewModel[]) {
    const pdf = new jsPDF({
      orientation: 'landscape'
    });



    areas.forEach((area, index) => {
      // if (index!=1){
      //   posicionYAux=10;
      // }
      const firmas = firmasGuardadasPorArea[area.nombre];
      // area.firmas = firmas  as IFirmaItemAdminPazSalvoViewModel[];

      if(firmas) {
      //   let posicionYAux=0
      //   if(areas[index-1]){
      //     posicionYAux = (areas[index-1].firmas.length*20) +30
      //   }
      //   else{
      //   posicionYAux = area.posicionY;
      // }

      pdf.text(`Área: ${area.nombre}`, area.posicionX, area.posicionY);
      firmas.forEach(firma => {
        const { nombre, posicionX, posicionY } = firma;
        pdf.text(`Nombre: ${nombre}`, posicionX, posicionY);
       // pdf.rect(posicionX, posicionY, 20, 10);  // Dibuja un rectángulo en la posición indicada
      });
    }
    });

    const pdfOutput = pdf.output('blob');
   // const url = URL.createObjectURL(pdfOutput);
    this.pdfSrc = await this.fileToUint8Arrayfor(pdfOutput);
  }

  async fileToUint8Arrayfor(file: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const stringBase64: string | ArrayBuffer | null = reader.result;
        const data = stringBase64!.toString().split(',')[1]
        resolve(data);
      };
      reader.onerror = (error) => reject(error);
    });
  }

}
