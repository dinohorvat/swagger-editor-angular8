import {Component, OnInit} from '@angular/core';

declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-swagger-editor';

  ngOnInit(): void {
    const editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerEditorStandalonePreset
      ],
      url: 'http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json'
    });
  }

}
