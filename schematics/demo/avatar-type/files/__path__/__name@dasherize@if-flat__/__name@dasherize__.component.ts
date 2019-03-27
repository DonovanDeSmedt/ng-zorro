import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-avatar nzIcon="user"></nz-avatar>
    <nz-avatar nzText="U"></nz-avatar>
    <nz-avatar nzText="USER"></nz-avatar>
    <nz-avatar nzIcon="user" nzSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></nz-avatar>
    <nz-avatar nzText="U" style="color:#f56a00; background-color:#fde3cf;"></nz-avatar>
    <nz-avatar nzIcon="user" style="background-color:#87d068;"></nz-avatar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-avatar {
        margin-top: 16px;
        margin-right: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {}
