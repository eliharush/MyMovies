import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParam => {
      let id = routeParam.id;
      this.productsService.getSelectedProduct(id)
      console.log("UserId : ")
    });
  }

}
