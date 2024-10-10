import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {


  nuevos_producto: {name: string; price: number; description: string; date: string }[] = [
    { name: "Café Americano", price: 30, description: "Café negro recién preparado.", date: "2024-10-10" },
    { name: "Café Latte", price: 45, description: "Café con leche espumosa.", date: "2024-10-09" },
    { name: "Cappuccino", price: 50, description: "Café con leche y espuma de leche.", date: "2024-10-08" },
    { name: "Café Mocha", price: 55, description: "Café con chocolate y leche.", date: "2024-10-07" },
    { name: "Café Espresso", price: 35, description: "Café fuerte y concentrado.", date: "2024-10-06" }
  ];
  

  producto_nuevo = {name: '', price: 0, description: '', date: ''};



  constructor() { }

  ngOnInit() {
  }

  addOrUpdateProduct(){

  }

}
