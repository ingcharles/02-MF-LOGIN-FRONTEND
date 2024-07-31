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


export interface IFirmaItemAdminPazSalvoViewModel {
  area: string;
  nombre: string;
  posicionX: number;
  posicionY: number;
}
