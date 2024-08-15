
/**
* Vista create-localizacion-prueba-uno.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreateAdminPazSalvoComponent
* @package presentation
* @subpackage localizacion-prueba-uno
*/

import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { TooltipDirective } from '../../../data/base/directives/tooltip-directive';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { IGetAdminPazSalvoByIdViewModel, ISaveAdminPazSalvoViewModel, IUpdateAdminPazSalvoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-admin-paz-salvo.viewModel';
import { AdminPazSalvoUseCase } from '../../../domain/localizacion-prueba-uno/usesCases/admin-paz-salvo.usecase';
import { IFirmaAreaItemAdminPazSalvoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-firma-area-item-admin-paz-salvo.viewModel';
import { MatDialog } from '@angular/material/dialog';
import { IFirmaItemAdminPazSalvoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-firma-item-admin-paz-salvo.viewModel';
import { PdfDialogComponent } from '../components/pdf-dialog/pdf-dialog.component';

@Component({
  selector: 'create-admin-paz-salvo-page',
  templateUrl: './create-admin-paz-salvo.component.html',
  styleUrl: './create-admin-paz-salvo.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipDirective
  ],
  providers: [],
  //host: {ngSkipHydration: 'true' }
})

export class CreateAdminPazSalvoComponent implements OnInit {



  _fb: FormBuilder = inject(FormBuilder);
  _platformId: Object = inject(PLATFORM_ID);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _router: Router = inject(Router);
  _location: Location = inject(Location);
  _utilsService: UtilsService = inject(UtilsService);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _validatorsService: ValidatorsService = inject(ValidatorsService);
  _adminPazSalvoUseCase: AdminPazSalvoUseCase = inject(AdminPazSalvoUseCase);

  @ViewChild('firmaTable', { static: false }) firmaTable!: ElementRef;

  formAdminPazSalvo!: FormGroup;
  firmas: any = [];
  areas: IFirmaAreaItemAdminPazSalvoViewModel[] = [
    { nombre: 'Sistemas', posicionX: 20, posicionY: 0, maxRegistros: 5, firmas: [] },
    { nombre: 'Financiera', posicionX: 20, posicionY: 0, maxRegistros: 5, firmas: [] },
    // Añade las demás áreas aquí
  ];
  firmasGuardadasPorArea: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = {};

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.formAdminPazSalvo = this.fb.group({
      area: ['', Validators.required],
      nombre: ['', Validators.required],
      posicionX: [0, [Validators.required, Validators.min(0)]],
      posicionY: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.areas.forEach(area => {
      this.firmasGuardadasPorArea[area.nombre] = [];
    });
  }

  // get firmas() {
  //   return this.formAdminPazSalvo.get('firmas') as FormArray;
  // }

  addFirma() {
    if (this.formAdminPazSalvo.valid) {
      const selectedArea = this.formAdminPazSalvo.value;
      //console.log("selectedArea",selectedArea)
      //if (this.firmasGuardadasPorArea[selectedArea].length < this.getAreaMaxRegistros(selectedArea)) {
      // const firmaGroup = this.fb.group({
      //   area: [selectedArea, Validators.required],
      //   nombre: ['', Validators.required],
      //   posicionX: [0, [Validators.required, Validators.min(0)]],
      //   posicionY: [0, [Validators.required, Validators.min(0)]]
      // });

      this.firmas.push(selectedArea);
      this.onSubmit()
    } else {
      alert('Complete el formulario.');
    }
    // } else {
    //   alert('Número máximo de registros alcanzado para esta área.');
    // }

  }

  removeFirma(index: number) {
    this.firmas.removeAt(index);
  }

  onSubmit() {
    if (this.formAdminPazSalvo.valid) {
      const area = this.formAdminPazSalvo.get('area')?.value;
      const areaData = this.areas.find(a => a.nombre === area);

      if (areaData) {
        // Agrupar firmas por área
        const firmasAgrupadas: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = this.firmas.reduce(
                  (acc: { [key: string]: IFirmaItemAdminPazSalvoViewModel[] }, firma: IFirmaItemAdminPazSalvoViewModel) => {

          if (!acc[firma.area]) {
            acc[firma.area] = [];
          }
          acc[firma.area].push(firma);
          firma.posicionX = areaData.posicionX;
          return acc;
        }, {} as { [key: string]: IFirmaItemAdminPazSalvoViewModel[] });

        // Actualizar área actual para la última posición Y utilizada
        let y = 10; // Posición Y inicial
        for (const [areaName, registros] of Object.entries(firmasAgrupadas)) {

          const areaIndex = this.areas.findIndex(a => a.nombre === areaName);

          if (areaIndex !== -1) {
            this.areas[areaIndex].posicionY = y;
            y += 10; // Incrementar Y para el próximo grupo de firmas
          }

          // Asegurar el tipo explícito para el parámetro de la función
          registros.forEach((registro) => {
            registro.posicionY = y;
            y += 10;
          });

        }

        // Guardar las firmas agrupadas por área
        this.firmasGuardadasPorArea = firmasAgrupadas;
      }
    }
  }
  //  onSubmit() {
  //   if (this.formAdminPazSalvo.valid) {
  //     const area = this.formAdminPazSalvo.get('area')?.value;
  //     const areaIndex = this.areas.findIndex(a => a.nombre === area);
  //     console.log("areaIndex",areaIndex);
  //     const areaData = this.areas[areaIndex];

  //     if (areaData) {

  //       // Agrupar firmas por área y actualizar posiciones
  //       const firmasAgrupadas: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = this.firmas.reduce(
  //         (acc: { [key: string]: IFirmaItemAdminPazSalvoViewModel[] }, firma: IFirmaItemAdminPazSalvoViewModel) => {
  //           // Si es una nueva área
  //           if (!acc[firma.area]) {

  //             // Agregar la firma al acumulador para su área correspondiente
  //             (acc[firma.area] = acc[firma.area] || []).push(firma);
  //           } else {

  //             // Agregar la firma al acumulador para su área correspondiente
  //             (acc[firma.area] = acc[firma.area] || []).push(firma);
  //           }
  //           firma.posicionX = areaData.posicionX;;
  //           return acc;
  //         },
  //         {}
  //       );

  //       // Actualizar área actual para la última posición Y utilizada
  //       console.log("firmasAgrupadas",firmasAgrupadas)
  //       let y = 10; // Posición Y inicial
  //       for (const area in firmasAgrupadas) {
  //         console.log(area, 10, y);

  //         const areaIndex1 = this.areas.findIndex(a => a.nombre === area);
  //     console.log("areaIndex",areaIndex1);
  //     this.areas[areaIndex1].posicionY = y;
  //         y += 10;
  //         firmasAgrupadas[area].forEach((registro:any , index:any )=> {
  //           console.log(`Persona: ${registro.nombre}`, 20, y);
  //           registro.posicionY = y;
  //           y += 10;
  //         });
  //       }
  //       console.log("this.areas[areaIndex]",this.areas[areaIndex])
  //       console.log("this.areas",this.areas)
  //       console.log("firmasAgrupadas1",firmasAgrupadas)
  //       // Guardar las firmas agrupadas por área
  //       this.firmasGuardadasPorArea = firmasAgrupadas;
  //     }
  //   }
  // }
  //   if (this.formAdminPazSalvo.valid) {
  //     const area = this.formAdminPazSalvo.get('area')?.value;
  //     const areaIndex = this.areas.findIndex(a => a.nombre === area);
  //     const areaData = this.areas[areaIndex];

  //     if (areaData) {
  //       let posicionX = areaData.posicionX;
  //       let posicionY = areaData.posicionY;
  //       let ultimaPosicionY = 0; // Mantener la última posición Y de la firma del área anterior

  //       // Agrupar firmas por área y actualizar posiciones
  //       const firmasAgrupadas: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = this.firmas.reduce(
  //         (acc: { [key: string]: IFirmaItemAdminPazSalvoViewModel[] }, firma: IFirmaItemAdminPazSalvoViewModel) => {
  //           // Asegurarse de que 'firma' tenga la propiedad 'area' definida
  //           if (firma.area) {
  //             if (!acc[firma.area]) {
  //               // Si es una nueva área, inicializar la primera posición Y
  //               if (firma.area === areaData.nombre) {
  //                 firma.posicionX = posicionX;
  //                 firma.posicionY = posicionY;
  //                 posicionY += 20; // Incrementar para la siguiente firma en la misma área
  //               } else {
  //                 // Usar la última posición Y del área anterior
  //                 firma.posicionX = posicionX;
  //                 firma.posicionY = ultimaPosicionY + 40;
  //               }
  //             } else {
  //               // Área existente, asignar la posición Y incrementada
  //               firma.posicionX = posicionX;
  //               firma.posicionY = acc[firma.area][acc[firma.area].length - 1].posicionY + 20;
  //             }

  //             // Actualizar última posición Y
  //             ultimaPosicionY = firma.posicionY;

  //             // Agregar la firma al acumulador para su área correspondiente
  //             (acc[firma.area] = acc[firma.area] || []).push(firma);
  //           }
  //           return acc;
  //         },
  //         {}
  //       );

  //       // Actualizar areaData.posicionY a la última posición Y solo si el área es la actual
  //       if (areaData.nombre === area) {
  //         areaData.posicionY = ultimaPosicionY;
  //       }

  //       // Guardar las firmas agrupadas por área
  //       this.firmasGuardadasPorArea = firmasAgrupadas;
  //     }
  //   }
//     const area = this.formAdminPazSalvo.get('area')?.value;
//     const areaIndex = this.areas.findIndex(a => a.nombre === area);
//     const areaData = this.areas[areaIndex];

//     if (areaData) {
//       const posicionX = areaData.posicionX;
//       let posicionY = areaData.posicionY;
//       let ultimaPosicionY = 0; // Variable para mantener la última posición Y de la firma del área anterior

//       const firmasAgrupadas: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = this.firmas.reduce(
//         (acc: { [key: string]: IFirmaItemAdminPazSalvoViewModel[] }, firma: IFirmaItemAdminPazSalvoViewModel) => {
//           if (!firma.posicionY) {
//             if (!acc[firma.area]) {
//               // Nueva área
//               if (firma.area === areaData.nombre) {
//                 firma.posicionY = posicionY;
//                 posicionY += 20;
//               } else {
//                 // Usar la última posición Y de la firma del área anterior
//                 firma.posicionY = ultimaPosicionY + 20;
//               }
//             } else {
//               // Área existente
//               firma.posicionY = acc[firma.area][acc[firma.area].length - 1].posicionY + 20;
//             }
//           }

//           // Actualizar areaData.posicionY a la última posición Y solo si pertenece al área ingresada
//     if (areaData.nombre === area) {
//       areaData.posicionY = ultimaPosicionY;
//     }


// // Actualizar areaData.posicionY a la última posición Y
// //areaData.posicionY = ultimaPosicionY;
//           (acc[firma.area] = acc[firma.area] || []).push(firma);
//           return acc;
//         },
//         {}
//       );
//       if (areaData.nombre === area) {
//         areaData.posicionY = ultimaPosicionY;
//       }
//       // Guardar las firmas agrupadas por área
//       this.firmasGuardadasPorArea = firmasAgrupadas;
//     }
    // if (this.formAdminPazSalvo.valid) {
    //   const area = this.formAdminPazSalvo.get('area')?.value;
    //   // const areaData = this.areas.find(a => a.nombre === area);
    //   const areaIndex = this.areas.findIndex(a => a.nombre === area);
    //   const areaData = this.areas[areaIndex];
    //   if (areaData) {
    //     // let posicionX = areaData.posicionX
    //     // let posicionY = areaData.posicionY
    //     // this.formAdminPazSalvo.value.firmas.forEach((firma: IFirmaItemAdminPazSalvoViewModel) => {
    //     //   firma.posicionX = posicionX
    //     //   firma.posicionY = posicionY;
    //     //   posicionY+=20;

    //     // });
    //     // Agrupar firmas por área
    //     let posicionX = areaData.posicionX
    //     let posicionY = areaData.posicionY
    //     const firmasAgrupadas: { [key: string]: IFirmaAreaItemAdminPazSalvoViewModel[] } = this.firmas.reduce(
    //       (acc: { [key: string]: IFirmaItemAdminPazSalvoViewModel[] }, firma: IFirmaItemAdminPazSalvoViewModel) => {

    //         console.log("acc[firma.area] ", acc[firma.area]);
    //         if (!firma.posicionY)
    //           if (!acc[firma.area] && firma.area === areaData.nombre) {
    //             firma.posicionY = posicionY;
    //             posicionY += 20;
    //           } else {
    //             firma.posicionY = acc[firma.area][acc[firma.area].length - 1].posicionY + 20;
    //           }
    //         //let posicionYAux = 0;
    //         if (this.areas[areaIndex - 1]) {
    //           posicionY = (this.areas[areaIndex - 1].firmas.length * 20) + 30
    //           console.log("areas[index-1]", this.areas[areaIndex - 1])
    //           console.log("posicion", posicionY)
    //         }
    //         else {
    //           //posicionYAux = areaData.posicionY;
    //           console.log("posicion1", posicionY)
    //         }
    //         areaData.posicionY = posicionY;


    //         (acc[firma.area] = acc[firma.area] || []).push(firma);
    //         return acc;
    //       },
    //       {}
    //     );

    //     // Asignar posiciones para cada área
    //     // this.areas.forEach((data) => {
    //     //   if (firmasAgrupadas[data.nombre]) {
    //     //     let posicionY = data.posicionY;
    //     //     firmasAgrupadas[data.nombre].forEach((firma) => {
    //     //       firma.posicionX = data.posicionX;
    //     //       firma.posicionY = posicionY;
    //     //       posicionY += 20;
    //     //     });
    //     //   }
    //     // });
    //     this.firmasGuardadasPorArea = firmasAgrupadas;
    //     // this.areas.forEach((area, index) => {
    //     //   // if (index!=1){
    //     //   //   posicionYAux=10;
    //     //   // }
    //     //   const firmas = this.firmasGuardadasPorArea[area.nombre];
    //     //   //area.firmas = firmas  as IFirmaItemAdminPazSalvoViewModel[];
    //     //   console.log("firmas", firmas);
    //     //   console.log("index", index);

    //     //   if(firmas) {
    //     //     let posicionYAux=0
    //     //     if(this.areas[index-1]){
    //     //       posicionYAux = (this.areas[index-1].firmas.length*20) +30
    //     //       console.log("areas[index-1]", this.areas[index-1])
    //     //       console.log("posicion", posicionYAux)
    //     //     }
    //     //     else{
    //     //     posicionYAux = area.posicionY;
    //     //     console.log("posicion1", posicionYAux)
    //     //   }
    //     //   area.posicionY = posicionYAux;
    //     // }
    //     // });
    //   }

    //   // this.firmasGuardadasPorArea[area] = this.formAdminPazSalvo.value.firmas;
    // }


  //}

  generatePDF() {

    const dialogRef = this.dialog.open(PdfDialogComponent, {
      width: '80%',
      data: { firmasGuardadasPorArea: this.firmasGuardadasPorArea, areas: this.areas }
    });
  }

  getAreaMaxRegistros(areaNombre: string): number {
    return this.areas.find(area => area.nombre === areaNombre)?.maxRegistros || 0;
  }
}




// public title = 'Formulario AdminPazSalvo';

// public formAdminPazSalvo!: FormGroup;
// navigated = false;
// sub: any;
// @Output() closeAdminPazSalvo = new EventEmitter();


// ngOnInit(): void {

// this._utilsService.showTooltip(this._platformId);

// this.formAdminPazSalvo = new FormGroup({
// 	campoSerial: new FormControl(null, Validators.compose([Validators.max(999999999)])),
// 	campoFechaUnicio: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
// 	campoFechaFin: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
// 	campoDescripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(250)])),
// });

// this.sub = this._activatedRoute.params.subscribe(params => {
// 	this.navigated = true;
// 	const id = params['id'];
// 	if (id != undefined) {
// 		this.navigated = true;
// 		let campoSerial: IGetAdminPazSalvoByIdViewModel = { campoSerial: id };
// 		this._adminPazSalvoUseCase.getAdminPazSalvoById(campoSerial).then(obs => {
// 			obs.subscribe((result) => {
// 				this._loaderService.display(false);
// 				if (result.ok) {
// 					this.formAdminPazSalvo.reset(result.data);
// 					if (result.data?.campoFechaUnicio != null) {
// 						var datePipe = new DatePipe('en-US');
// 						this.formAdminPazSalvo.get('campoFechaUnicio')?.setValue(datePipe.transform(result.data?.campoFechaUnicio, 'yyyy-MM-dd'));
// 					}
// 					if (result.data?.campoFechaFin != null) {
// 						var datePipe = new DatePipe('en-US');
// 						this.formAdminPazSalvo.get('campoFechaFin')?.setValue(datePipe.transform(result.data?.campoFechaFin, 'yyyy-MM-dd'));
// 					}
// 					} else {
// 						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
// 					}
// 				});
// 			});
// 		};
// 	});
// };

// saveAdminPazSalvo(): void {
// 	if (this.formAdminPazSalvo.invalid) {
// 		this.formAdminPazSalvo.markAllAsTouched();
// 		this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
// 		return;
// 	}
// 	const currentAdminPazSalvo:any = this.currentAdminPazSalvo;
// 	currentAdminPazSalvo.campoFechaUnicio = new Date(this.formAdminPazSalvo.value.campoFechaUnicio).toISOString();
// 	currentAdminPazSalvo.campoFechaFin = new Date(this.formAdminPazSalvo.value.campoFechaFin).toISOString();

// 	if (this.currentAdminPazSalvo.campoSerial) {
// 		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
// 			this._adminPazSalvoUseCase.updateAdminPazSalvo(currentAdminPazSalvo as IUpdateAdminPazSalvoViewModel).then(obs => {
// 				this._loaderService.display(true);
// 				obs.subscribe((result) => {
// 					this._loaderService.display(false);
// 					if (result.ok) {
// 						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
//             this._router.navigateByUrl('index-localizacion-prueba-uno');
// 					} else {
// 						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
// 					}
// 				});
// 			});
// 		});
// 		return;
// 	};

// this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
// 	this._adminPazSalvoUseCase.saveAdminPazSalvo(currentAdminPazSalvo as ISaveAdminPazSalvoViewModel).then(obs => {
// 	this._loaderService.display(true);
// 	obs.subscribe((result) => {
// 		this._loaderService.display(false);
// 		if (result.ok) {
// 		this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
// 			this.formAdminPazSalvo.get('campoSerial')!.patchValue(result.data?.campoSerial);
// 			this._router.navigateByUrl('index-localizacion-prueba-uno');
// 		} else {
// 		this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
// 			}
// 		});
// 	});
// });
// };

// public cancelAdminPazSalvo(): void{
// 	this.closeAdminPazSalvo.emit(true);
// 	this._location.back();
// };

// private get currentAdminPazSalvo(): IUpdateAdminPazSalvoViewModel {
// 	return this.formAdminPazSalvo.value as IUpdateAdminPazSalvoViewModel;
// };

