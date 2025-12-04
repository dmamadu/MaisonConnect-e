import { ElementRef, Injectable, ViewChild } from "@angular/core";
//import {CONSTANTES} from 'app/modules/presentation/admin/model/constantes';
//import {TransactionVueService} from 'app/modules/presentation/transaction-vue/transaction-vue.service';
import { map } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {

  /**
   * Constructor
   */
  constructor(
    //private transactionVueService: TransactionVueService,
  ) {}



  showConfirmation(message: string): Promise<any> {
    return Swal.fire({
      title: "Confirmation",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Valider",
      cancelButtonText: "Annuler",
    });
  }



  showSimpleNotification(title: string, message: string): Promise<any> {
    return Swal.fire({
      icon: "success",
      title: title,
      text: message,
      confirmButtonText: "OK",
    });
  }




  /**


  /**
   * Affiche un message de succès
   */



  /**
   * Affiche une info-bulle
   */

}
