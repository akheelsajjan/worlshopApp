- Modules
    - Services - application-wide business logic - logging, notifications, api calls (talking to the backend)
    - Components - UI elements - custom HTML elements
    - Directives - custom HTML attributes
    - Pipes - are used to transform data

--

Two kinds of modules
====================
- ES2015 modules - these are JS file
- Angular modules

--

Angular Modules
===============
- App module (every Angular app should have 1 module - usually called App module)

- M1 (Shopping Cart module)
    - S1, S2 (add / delete to cart), calculate cart total
    - C1, C2 (cart page, cart line item)
    - C1 and C2 can make use of each other
    - we can "Export" certain building blocks from a module - say C1, C2 are exported from this module, i.e. M1

- M2
    - S3
    - C3, C4
    - If C3 wants to make use of C2, its module M2 should "import" M1. When we import M1 we import all the exported building blocks of M1. So both C1, C2 are available for use when M2 imports M1

- M3
    - S4, S5
    - C5, C6
