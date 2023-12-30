# Flights

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version **16.1.5.** and Node **18.16.1.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Folder structure

The defined folder structure for an Angular project promotes organization, reusability, and scalability. The app folder acts as a core that contains services and models that are shared across the entire application, allowing for a centralized location for commonly used code. The shared/ folder contains standalone components, directives, and pipes that can be used across multiple modules in the application, improving code reusability. The modules/ folder contains modules that encapsulate specific features of the application, along with their respective components, pages and services. Finally, the app.module.ts and app-routing.module.ts files are located in the root of the app/ folder, reflecting Angular's recommended architecture for
app-level modules and routing configuration.

```javascript
src/
  app/
    shared/
      services/
      components/
      directives/
      pipes/
      models/
    modules/
      module1/
        components/
        services/
        models/
        pages/
        module1.module.ts
        module1-routing.module.ts
      module2/
        components/
        services/
        models/
        pages/
        module2.module.ts
        module2-routing.module.ts
    app.module.ts
    app-routing.module.ts
```

## Components order

The order of defining component inputs, ngOnInit, constructor, and methods does not matter in terms of functionality. However, it is recommended to follow a consistent and logical order to make the code more readable and maintainable.

A common order for organizing the component code in Angular is:

- Import statements: import all the required modules and libraries.
- Component decorator: define the selector, template, and style files.
- Class declaration: declare the component class.
- Inputs and Outputs: define the component inputs and outputs.
- Class properties: declare and initialize the class properties.
- Constructor: initialize the dependencies for the component.
- Lifecycle hooks: implement the lifecycle hooks such as ngOnInit, ngOnDestroy, etc..
- Private methods: define private methods used internally in the component.
- Public methods: define public methods used by the parent components.
- Utility methods: define utility methods used by the component.
