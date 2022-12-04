Angular Cheat Sheet-Basics

1.
<input type="text" [(ngModel)]="name">
<p>{{name}}</p>

Directives -> the NG tells the Angular that whatever is inputed into the textfield needs to be stored in the local variable “name”.
The variable name should be declared in the Component and can be used inside the html and the css.
With this we can achieve live tipping and displaying of data! For this we also need the FormsModule input inside the module of the service.

2. Typescript -> a framework that extends the javascript, e.x classes are added.
It’s TYPEscript because you can set a type to a variable. E.x if you say a variable will be a string and later you give a number to this variable you will get an error.
This won’t happen in javascript, where the types are set dynamically. Typescript doesn’t run in the browser, it’s compiled to JavaScript. This compilation is done by the CLI and that’s why we need a package 
For the CLI, and by that at the end on the browser will be run javascript not a typescript code.

3. When we visit the localhost:4200 this our local server which is created/spawn by the CLI. The first file(pice of code) that is being executed is the main.ts.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

And with the bootstrapModule function we tell the angular to load the AppModule.

When we load the app module we have the “bootstrap: [AppComponent]” which allows the angular to know that we have a component that can be used and that are the files that contains component in their names.
So now the CLI opens the component files and finds that in the app.component.ts file we have a “selector: 'app-root’,“. When the CLI sees this he automatically puts this component into execution and changes the 
Html from the index.html file with the content from the app.component.html file.

4. Components -> the idea of the angular is everything to be build by components. Every component has its own template and it can easily can be replicated.
E.x the menu bar can be a component. We have a main component which is the app.component that holds references to all our other component. All the other components should be referenced inside the app.module.ts in order the main component to know about them and we to be able to use them. The only component which is added as a selector to the index.html file is the root one which is the app.component one. All the other components would be added inside the root component. A component is simply a typescript class.

5. Angular uses components to build web pages. Angular uses modules to bundle different pieces

6. By default Angular won’t scan all our files, and won’t know about our other modules. So we need to declare them in the app.module in order to be able to use them.
7. When we create a component we declare a selector for example selector:’app-server’. After that this is the link we can use to be able to use this component in the other components.
For example in the .html file of the other components we can easily call our other component by simply invoking <app-server></app-server>

8. We can generate components with the CLI -> ng generate component servers(ng g c servers). This will create all the files(.html, .ts.css)
9. Each component should have a template or templateUrl inside their .ts files
10. We can write the html of the component directly in the templatate variable in the component decorator inside th .ts class. This works in cases when we have a short html that we want to visualise about a component.
11. Selectors can be used in another ways, not just by typing ‘app-server’ in the .ts file. One approach is to make it an element. In this case in the component .ts class we can register it as selector: ‘[app-server]’ and if we do it then we can use it as element but when we call it we have ti invoke it in a div: <div app-server></div>. The other way is: selector: ‘’.app-server, this time it acts as a class and can be invokes like the following: <div class=“”app.server><.div>.  With this we can set a css style for the whole component!!!!
12. Databinding -> Communication between the typescript code and the templates. When we want to communicate from the typescript to the templates(html) we can use string interpolation ({{data}}) or property binging inside the html ({property} = “data”). The other way of the communication is also interesting, from the html code to the typescript code and this is called event binding((event)=“”expression). There is also a two-way-binding ([(ngModel)]=“data”)
13. We can declare variables in the .ts file of the component (serverId: number = 10) and simply string interpolate it inside the html code {{serverId}}. The string interpolation is  the brackets {{}}. Inside this string interpolation we can use expression that should always return string. We can’t add multiline expressions. We can also call a method inside this expressions.
14. If we want to dynamically bind a property inside an html element fro example the property disabled we should surround it by []. With this we are directly referring to the element Inside the DOM not In the html and we refer to its property. Every element from the html at the end is parsed to the DOM(document object model).
15. Event binding -> used when we want to execute some code when some event is applied to an element from our code. The event binding syntax is (click), this should be put inside the element next to its properties. And after that we can call the method with code we want to execute: (click)=“method()”
16. Fetching the event Data is possible when we call the methods on the event: (input)=“udpateStatus($event)” and after that In the method signature we should have this as an input param of type event!
With the $event we will get the properties of the event.

17. Two-way-binding is when we set event, it will change some variables value but it will also change the value of the element. It is combining both event binding and property binding.
Its done [(ngModel)=“variableName”]

18. Directives -> Directives are instructions in the Dom. The components are kind of directives. The director can be set as an attribute to a property inside the html code. The directives are classes that have a decorator of “Directive” and this decorator has a selector inside it. With this directives we can achieve a creating of an element dynamically that is not existing in the dorm and we can add it or remove whenever we want. ngif is a built in directive for checking conditions.This is structural directive, because it adds or removed elements from the DOM structure. The other type of the directives is Attribute directives which doesn’t add or remove elements from the structure of the DOM but just change already existing element.
19. ngClass -> it only adds class to an element if certain condition is true, otherwise it won’t be added as an attribute to the element In the DOM.
20. If we are going to use a directive that will dynamically add or remove elements from the DOM we should place * before it. For example the ngif and ngFor directives.

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
