import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-anchor>
      <nz-link nzHref="#components-anchor-demo-basic" nzTitle="Basic demo"></nz-link>
      <nz-link nzHref="#components-anchor-demo-static" nzTitle="Static demo"></nz-link>
      <nz-link nzHref="#API" nzTitle="API">
        <nz-link nzHref="#anchor-props" nzTitle="nz-anchor"></nz-link>
        <nz-link nzHref="#link-props" nzTitle="nz-link"></nz-link>
      </nz-link>
    </nz-anchor>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component { }
