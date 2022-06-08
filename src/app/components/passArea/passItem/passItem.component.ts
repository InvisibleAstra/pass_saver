import {Component, ElementRef, Input, TemplateRef, ViewChild} from "@angular/core";
import {NbDialogService} from "@nebular/theme";


@Component({
  templateUrl: 'passItem.component.html',
  styleUrls: ['passItem.component.scss'],
  selector: 'app-passItem',
})
export class PassItemComponent {

  dataFromDB = [
    {name: 'login', type: 'input', value: 'some data test', readonly: true},
    {
      name: 'password',
      type: 'input',
      value: 'some data test',
      readonly: true
    }
  ];


  constructor(private dialogService: NbDialogService) {

  }


  async open(dialog: TemplateRef<any>) {

    await this.dialogService.open(dialog, {context: 'this is some additional data passed to dialog'});
  }

}
