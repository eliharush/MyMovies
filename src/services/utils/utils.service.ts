import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public imageOpenUrl: Array<any> = [{
    image: '',
  }]
  public selectedImageIndex: number = -1;
  public showFlag: boolean = false;
  public currentIndex: number = 0;

  constructor() { }



  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  showLightbox(index: number, imgUrl: string) {
    this.imageOpenUrl[0].image = imgUrl;
    this.currentIndex = index
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  openImage(question: string) {
    console.log("Q : ", question)
  }
}


