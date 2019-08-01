import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen : boolean = true;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
