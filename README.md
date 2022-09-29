# NgrxExampleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

Simple implementation for ngrx usage in angular.

Application state object :

`
  export interface AppState {
    stocks: ReadonlyArray<Stock>;
  }
`

For stocks that we keep in app state we have reducer,action and selector.

## Npm Packages

Run `npm install` before run the project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test

For test reflection of stocks in components please click `Add Stock` button.

![image](https://user-images.githubusercontent.com/53901858/193143889-7a9913b4-ee4c-4418-a706-d7769ed8a0eb.png)


