import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-list-add-view',
  templateUrl: './list-add-view.component.html',
  styleUrls: ['./list-add-view.component.css']
})
export class ListAddViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list :any = [];
  listItem: String = '';
  onAddItem(){
    this.list.push(this.listItem);
    console.log("list item added",this.list);
  }

  onDeleteItem(index: any){
    this.list.splice(index, 1);
  }

}
