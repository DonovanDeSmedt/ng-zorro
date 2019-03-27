import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-timeline nzMode="alternate">
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item nzColor="green">Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzDot]="dotTemplate"
        >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.</nz-timeline-item
      >
      <nz-timeline-item nzColor="red">Network problems being solved 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item [nzDot]="dotTemplate">Technical testing 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <ng-template #dotTemplate>
      <i nz-icon type="clock-circle-o" style="font-size: 16px;"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
