import { Component } from '@angular/core';
import { IDropdownItem } from './model/dropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  dataList: IDropdownItem[] = [];
  selectedItem!: IDropdownItem;
  constructor() {}

  ngOnInit() {
    this.dataList = [
      { DisplayValue: 'Option 1', Value: 1 },
      { DisplayValue: 'Option 2', Value: 2 },
      { DisplayValue: 'Option 3', Value: 3 },
      { DisplayValue: 'Option 4', Value: 4 },
      { DisplayValue: 'Option 5', Value: 5 },
      { DisplayValue: 'Option 6', Value: 6 },
      { DisplayValue: 'Option 7', Value: 7 },
      { DisplayValue: 'Option 8', Value: 8 },
      { DisplayValue: 'Option 9', Value: 9 },
      { DisplayValue: 'Option 10', Value: 10 },
    ];
  }

  onSelection(data: IDropdownItem) {
    console.log(data);
    this.selectedItem = data;
  }
}
