import { Directive } from '@angular/core';

@Directive({
  selector: '[appStructuralDir]'
})
export class StructuralDirDirective {
  isToggle : string
  
  constructor() { 
    
  }

}
