# 🛍️ Mini-Commerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Overview

A client-side prototype of a small e-commerce shop built with Angular. Visitors can browse products, manage their cart, and perform a mock checkout — with full support for persistence across page reloads.

## What I Built

Mini-Commerce is a lightweight, fully client-side e-commerce web application that supports:

- Product listing and detail pages
- Cart management (add, update, remove)
- Checkout flow with success confirmation
- Cart persistence via localStorage
- Routing and navigation across multiple pages

## Design Approach

- **Layout**: Clean, card-based grid layout for products, with distinct areas for cart, checkout, and success flow.
- **Colors**: Primary palette of blue and white for trust and simplicity. Accent colors used for call-to-actions (e.g. buttons, cart badges).
- **Responsiveness**: Fully responsive using Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`), ensuring optimal experience on mobile, tablet, and desktop.

## Tools & Techniques

- **Framework**: Angular 17 with standalone components
- **State Management**: NgRx (Store, Actions, Reducers, Selectors, Effects)
- **Styling**: Tailwind CSS
- **Persistence**: Cart state persisted in `localStorage` via custom `StorageService` and NgRx `Effects`
- **Routing**: Angular Router with lazy navigation and dynamic slugs
- **Architecture**: Feature-first structure (`products/`, `cart/`, `checkout/`) using strongly typed models and selectors
- **Testing**: Manual end-to-end testing, unit-test ready (NgRx architecture)
- **CI**: Easy to integrate into CI/CD pipelines via `ng build --configuration=production`

## SEO Strategy

- Proper use of `<title>`, `<meta>` tags on pages (where needed)
- Optimized image loading (via `object-cover` sizing and fixed height containers)
- Fast client-side performance (no external dependencies beyond Angular & Tailwind)
- Accessibility tags and readable font sizes
- Lazy loading potential for detail/product routes

## 🛡️ Error Handling

- Centralized **HTTP error handling** via `HttpInterceptor`
- Reusable **Toast notification system** to alert users of issues (e.g. add-to-cart failures, network issues)
- Graceful fallback for empty cart states and missing product data
- Cart state is validated before actions are dispatched

---

> ⚙️ Run `ng serve` and visit `http://localhost:4200` to try it out.

---

