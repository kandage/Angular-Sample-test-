import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  @Input() provideData= '';
  exportDataText: string='';
  @Output() textEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  sendData(value:string){
    this.textEmitter.emit(value);
  }

  ngOnInit(): void {
  }

}
