import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-my-input-field',
  templateUrl: './my-input-field.component.html',
  styleUrls: ['./my-input-field.component.css']
})
export class MyInputFieldComponent implements OnInit {

  @Input() label: string;
  @Input() inputValue: string;
  @Output() outputValueEvent = new EventEmitter<string>();


  @ViewChild('input') inputElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeInput(event)
  {
    console.log(event);
    console.log(event.target.value);
    //this.imdbId = event.target.value;
    this.outputValueEvent.emit(event.target.value);
  }

}
