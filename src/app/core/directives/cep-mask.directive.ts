import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCepMask]',
  standalone: true
})
export class CepMaskDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any): void {
    const input = event.target;
    let value: string = input.value.replace(/\D/g, ''); // Remove all non-digit characters

    if (value.length > 5) {
      value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }

    input.value = value;
  }

}
