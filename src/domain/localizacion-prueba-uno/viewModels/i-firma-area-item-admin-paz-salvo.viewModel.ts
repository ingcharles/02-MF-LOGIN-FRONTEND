/**
* Interface i-localizacion-prueba-uno.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    AdminPazSalvoviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';
import { IFirmaItemAdminPazSalvoViewModel } from './i-firma-item-admin-paz-salvo.viewModel';


export interface IFirmaAreaItemAdminPazSalvoViewModel {
  nombre: string;
  posicionX: number;
  posicionY: number;
  maxRegistros: number;
  firmas: IFirmaItemAdminPazSalvoViewModel[];
}
