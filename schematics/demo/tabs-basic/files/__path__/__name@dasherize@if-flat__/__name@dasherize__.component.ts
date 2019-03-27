import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tabset>
      <nz-tab nzTitle="Tab 1">
        Content of Tab Pane 1
      </nz-tab>
      <nz-tab nzTitle="Tab 2">
        Content of Tab Pane 2
      </nz-tab>
      <nz-tab nzTitle="Tab 3">
        Content of Tab Pane 3
      </nz-tab>
    </nz-tabset>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
