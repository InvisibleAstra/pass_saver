import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Clipboard} from '@angular/cdk/clipboard';
import {NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from "@nebular/theme";

interface test {
  value: any;
  name: any;
  readonly: any
}

@Component({
  templateUrl: 'customInput.component.html',
  styleUrls: ['customInput.component.scss'],
  selector: 'app-customInput'
})
export class CustomInputComponent {
  @Input() field: any
  viewAccess = 'password' || 'text';
  @ViewChild('input') input: ElementRef | undefined
  physicalPositions = NbGlobalPhysicalPosition;


  constructor(private clipboard: Clipboard, private toastrService: NbToastrService) {
    this.viewAccess = 'password';
  }


  changeAccessToFiled() {

    let readonlyStatus = !this.field.readonly
    this.field.readonly = readonlyStatus;
    if (!readonlyStatus) {
      this.input?.nativeElement.focus();
    }
  }


  copyInfo() {
    this.clipboard.copy(this.input?.nativeElement.value);
    let notificationPosition: NbGlobalPosition = this.physicalPositions.TOP_RIGHT
    this.toastrService.show('', 'Copied', { status: 'success', position: notificationPosition, duration: 1650 });

  }


  changeViewAccess() {
    this.viewAccess == 'password' ? this.viewAccess = 'text' : this.viewAccess = 'password';
  }
}
