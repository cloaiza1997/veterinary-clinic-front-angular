import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

/**
 * Directiva para funcionalidad goBack en botones
 */
@Directive({
  selector: '[backButton]',
})
export class BackButtonDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick(): void {
    this.location.back();
  }
}
