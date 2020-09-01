import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = [
    {name:'Trang chủ',url:'#',disabled:false,child:null},
    {name:'Các hãng sản xuất',disabled:false,url:'#',child:[{name:'Mercedes Benz',url:'#'},{name:'BMW',url:'#'},{name:'Audi',url:'#'},{name:'Lamborghini',url:'#'},{name:'Vinfast',url:'#'}]},
    {name:'Blog',url:'#',disabled:false,child:null},
    {name:'About us',url:'#',disabled:false,child:null}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
