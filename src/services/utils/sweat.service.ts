import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweatService {

  constructor() { }

  deleteConfirm(title: string, description: string, confirmbuttonText = 'מחק') {
    return new Promise(async (resolve, reject) => {
      Swal.fire({
        title: "<span style='color:#221F73; text-align:right; direction:rtl !important; position:relative;'>" + title + "?</span>",
        html: "<span style='color:#221F73; text-align:right; direction:rtl; position:relative; font-size:14px;top:-12px !important; width:120%'>" + description + "?</span>",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#221F73',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmbuttonText,
        cancelButtonText: 'בטל'
      }).then(async (result) => {
        resolve(result.isConfirmed);
      })
    });
  }


  saveDetails(title: string, description: string) {
    return new Promise(async (resolve, reject) => {
      Swal.fire({
        title: title,
        text: description,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'שמור',
        cancelButtonText: 'לא לשמור שינויים'
      }).then(async (result) => {
        resolve(result.isConfirmed);
      })
    });
  }


  Success(message: string) {
    Swal.fire(
      '',
      message,
      'success'
    )
  }

  Warning(message: string) {
    Swal.fire(
      '',
      message,
      'warning'
    )
  }
}
