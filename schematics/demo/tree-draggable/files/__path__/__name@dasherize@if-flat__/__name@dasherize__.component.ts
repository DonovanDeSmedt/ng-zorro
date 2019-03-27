import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tree
      [nzData]="nodes"
      nzDraggable
      (nzOnDrop)="nzEvent($event)">
    </nz-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .draggable-tree .ant-tree-node-content-wrapper {
      width: calc(100% - 42px);
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component implements OnInit {
  nodes = [ {
    title   : '0-0',
    key     : '00',
    expanded: true,
    children: [ {
      title   : '0-0-0',
      key     : '000',
      expanded: true,
      children: [
        { title: '0-0-0-0', key: '0000', isLeaf: true },
        { title: '0-0-0-1', key: '0001', isLeaf: true },
        { title: '0-0-0-2', key: '0002', isLeaf: true }
      ]
    }, {
      title   : '0-0-1',
      key     : '001',
      children: [
        { title: '0-0-1-0', key: '0010', isLeaf: true },
        { title: '0-0-1-1', key: '0011', isLeaf: true },
        { title: '0-0-1-2', key: '0012', isLeaf: true }
      ]
    }, {
      title: '0-0-2',
      key  : '002'
    } ]
  }, {
    title   : '0-1',
    key     : '01',
    children: [ {
      title   : '0-1-0',
      key     : '010',
      children: [
        { title: '0-1-0-0', key: '0100', isLeaf: true },
        { title: '0-1-0-1', key: '0101', isLeaf: true },
        { title: '0-1-0-2', key: '0102', isLeaf: true }
      ]
    }, {
      title   : '0-1-1',
      key     : '011',
      children: [
        { title: '0-1-1-0', key: '0110', isLeaf: true },
        { title: '0-1-1-1', key: '0111', isLeaf: true },
        { title: '0-1-1-2', key: '0112', isLeaf: true }
      ]
    } ]
  }, {
    title : '0-2',
    key   : '02',
    isLeaf: true
  } ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
