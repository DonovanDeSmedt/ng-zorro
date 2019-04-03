import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tree
      [nzData]="nodes"
      nzShowLine="true"
      (nzClick)="nzEvent($event)">
    </nz-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  nodes = [ {
    title   : 'parent 1',
    key     : '100',
    expanded: true,
    children: [ {
      title   : 'parent 1-0',
      key     : '1001',
      expanded: true,
      children: [
        { title: 'leaf', key: '10010', isLeaf: true },
        { title: 'leaf', key: '10011', isLeaf: true },
        { title: 'leaf', key: '10012', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-1',
      key     : '1002',
      children: [
        { title: 'leaf', key: '10020', isLeaf: true }
      ]
    }, {
      title   : 'parent 1-2',
      key     : '1003',
      children: [
        { title: 'leaf', key: '10030', isLeaf: true },
        { title: 'leaf', key: '10031', isLeaf: true }
      ]
    } ]
  } ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
