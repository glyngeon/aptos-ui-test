import { Component, EventEmitter, HostListener, Input, OnInit, Output, forwardRef } from '@angular/core';
import { DropdownMouseState, IDropdownItem } from '../model/dropdown.model';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  showMenu: boolean;
  isDisabled: boolean;
  selectedItem!: any;

  state: DropdownMouseState;

  @Input() data!: Array<IDropdownItem>;

  @Input('labelText') label!: string;
  @Input() placeholder!: string;

  @Output() change: EventEmitter<IDropdownItem> = new EventEmitter<IDropdownItem>();

  @HostListener('document:click') clickedOutside() {
    if (this.state == DropdownMouseState.outside) {
      this.showMenu = false; // hide the dropdown...
    }
  }

  constructor() {
    this.showMenu = false;
    this.isDisabled = false;
    this.state = DropdownMouseState.outside;
  }

  ngOnInit() {
  }

  valueChange(item: IDropdownItem) {
    this.selectedItem = item;
    this.change.emit(item);
    this.showMenu = false;
  }

}


