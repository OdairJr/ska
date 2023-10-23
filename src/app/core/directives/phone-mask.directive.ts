import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
  standalone: true
})
export class PhoneMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target;
    let value: string = input.value.replace(/\D/g, '');

    if (!value) {
      input.value = '';
      return;
    }

    if (value.length <= 2) {
      input.value = `(${value}`;
    } else if (value.length <= 7) {
      const areaCode = value.substring(0, 2);
      const prefix = value.substring(2, 7);
      input.value = `(${areaCode}) ${prefix}`;
    } else {
      const areaCode = value.substring(0, 2);
      const prefix = value.substring(2, 7);
      const suffix = value.substring(7, 13);
      input.value = `(${areaCode}) ${prefix}-${suffix}`;
    }
  }

}
