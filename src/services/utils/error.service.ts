import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'

@Injectable({
    providedIn: 'root'
})
export class ErrorsService {
    constructor() { }

    async errorHandeling(error: any) {
        console.log("DEVELOPER_ERROR : ", error['ERROR'].DEVELOPER_ERROR, error['ERROR'].DISPLAY_ERROR)
        Swal.fire({
            text: error['ERROR'].DISPLAY_ERROR + " \n נסה שנית מאוחר יותר !!",
            icon: 'error',
            title: "שגיאת שרת !!",
            showConfirmButton: false,
            timer: 5500
        })
    }


    async errorHandelingHttp(error: any) {
        // console.log("DEVELOPER_ERROR : ", error['ERROR'].DEVELOPER_ERROR, error['ERROR'].DISPLAY_ERROR)
        console.log("Error : ", error)
        let message = error.error.message;
        Swal.fire({
            text: message,
            icon: 'error',
            title: "אירעה שגיאה בשרת",
            showConfirmButton: false,
            timer: 5500
        })
    }
}
