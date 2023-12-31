import { Directive, HostListener, Renderer2, ElementRef } from "@angular/core";
import { NgModel } from "@angular/forms";
import { NgxCpfCnpj } from "./ngx-cpf-cnpj";

@Directive({
  selector: "[nccCpfCnpjMask]",
  standalone: true
})
export class CpfCnpjMaskDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInput(event) {
    if (event.target.value.length <= 18) {
      this.renderer.setProperty(
        this.el.nativeElement,
        "value",
        NgxCpfCnpj.convertToCpfCnpj(event.target.value)
      );
    }
  }
}
