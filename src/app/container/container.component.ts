import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() name:string = "เขื่อนแม่งัดสมบูรณ์ชล";
  @Input() numberC:number = 0;
  @Input() numberLeft:string ='0';
  @Input() numberRigth:number = 0;
  @Input() classContainer:string =''
  

    Mid(val:number) {
      if (val >= 0 && val <= 35) {
        return 'middle-yellow';
      } else if (val > 35 && val <= 70) {
        return 'middle-green';
      } else {
        return 'middle-red'
      }
    
  }
  
  RigthContainer(val:number) {
    if (val >= 0 && val <= 35) {
      return 'right-content-yellow';
    } else if (val > 35 && val <= 70) {
      return 'right-content-green';
    } else {
      return 'right-content-red '
    }
  
}
  

}
