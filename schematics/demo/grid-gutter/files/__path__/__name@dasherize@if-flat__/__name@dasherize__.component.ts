import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="gutter-example">
      <div nz-row nzGutter="16">
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
      </div>
    </div>
    <div class="gutter-example">
      <div nz-row [nzGutter]="{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }">
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
        <div nz-col class="gutter-row" nzSpan="6">
          <div class="gutter-box">col-6</div>
        </div>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .gutter-box {
        background: #00a0e9;
        padding: 5px 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {}
