import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-transfer
      [nzDataSource]="list"
      [nzListStyle]="{'width.px': 300, 'height.px': 300}"
      [nzRender]="render"
      (nzSelectChange)="select($event)"
      (nzChange)="change($event)">
      <ng-template #render let-item>
        <i nz-icon type="{{item.icon}}"></i> {{ item.title }}
      </ng-template>
    </nz-transfer>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  // tslint:disable-next-line:no-any
  list: any[] = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const ret = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key        : i.toString(),
        title      : `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction  : Math.random() * 2 > 1 ? 'right' : '',
        icon       : `frown-o`
      });
    }
    this.list = ret;
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }

  constructor(public msg: NzMessageService) {
  }
}
