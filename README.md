# SwaggerEditor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

![Swagger Angular](https://raw.githubusercontent.com/dinohorvat/swagger-editor-angular8/master/src/assets/swagger-angular.png)

## How to implement swagger-editor in your project
### Dependecies
    npm i swagger-editor-dist --save
### Configuration
<b> angular.json </b>

    "styles": [
       "node_modules/swagger-editor-dist/swagger-editor.css",
       "src/styles.css"
     ],
    "scripts": [
       "node_modules/swagger-editor-dist/swagger-editor-bundle.js",
       "node_modules/swagger-editor-dist/swagger-editor-standalone-preset.js"
     ]
     
<b> component.ts </b>

    declare const SwaggerEditorBundle: any;
    declare const SwaggerEditorStandalonePreset: any;
    ....
    ....
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
<b> component.html </b>
    
    <div id="swagger-editor"></div>


     
