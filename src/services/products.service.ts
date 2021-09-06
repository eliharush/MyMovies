import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    _products: Array<Product> = [];
    _selectedProduct: Product = new Product();
    _movieName: string = "black"

    constructor(public api: ApiService) {
        this.getAllProducts();
    }

    async getAllProducts() {
        this._products = await this.api.createGetService(environment.BaseURL + "search/shows?q=" + this._movieName) as Array<Product>;
        console.log("products : ", this._products)
    }

    async getSelectedProduct(id: number) {
        this._selectedProduct = await this.api.createGetService(environment.BaseURL + "shows/" + id) as Product;
        console.log("SELECTED : ", this._selectedProduct)
    }

    searchMovies(searchInput: string) {
        this._movieName = searchInput;
        this.getAllProducts();
    }
}