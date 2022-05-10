import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  searchText: string='';
  importedDataFromChild = '';

  constructor() { }

  setData(value:string){
    this.importedDataFromChild= value;
  }

  ngOnInit(): void {
  }

}
