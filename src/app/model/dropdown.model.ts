
export interface IDropdownItem {
    // The text that will show to the user.
    DisplayValue: string;
    // the value used in the .ts file/backend...
    Value: any;
}


export enum DropdownMouseState {
    inside,
    outside,
}