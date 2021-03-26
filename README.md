# Examples for Angular - Dependency-Injection

Angular creates two hierarchies of Injectors:
* model injector
* element injector

[How does injection work?](dependency-injection.png) [Source: Dmytro Mezhenskyi](https://www.youtube.com/watch?v=G8zXugcYd7o)
* If a component injects a service angular uses the follwoing steps to find it and inject it:
1. it stars in the "Element Injector Hierarchy"
   1. and asks the "Grand Child Element Injector"
   2. if it is not there it goes one level up to the "Child Component"
   3. then it asks the "Element Injector"
2. if Angular could not resolve it in the Element Injector tree it goes back to the component where it started
3. now Angular checks in which scope of Module herarchy declared our component and delegates resolving to our "Module Injector Tree"
   1. it starts in the "Root Injector" and if it is not there it goes one level up
   2. then it goes to the "Platform Module"
   3. then it goes to the "NullInjector" and there we get the exception 


## model injector
#### Root Injector
* when Angular starts it creates a Root Injector
* there will be all services registered that are provided via
  * injectable annotation
  * and configured in providers in NgModel (if those models are NOT lazy loaded)
* angular goes recursively through all models which are being used in the application
  * and creates instances for provided services in root injector
* EVEN if a service is proved in an eagerly loaded model 
  * it will be added to the root injector and will be available in the whole application 

#### Platform Module > Root Injector
* the platform injector is in the hierarchy above the root injector
  * it will be created by the platform using "platformBrowserDynamic()" inside main.ts

#### NullInjector > Platform Module
* the highest in the hierarchy
  * it throws errors if Angular tries to find services here

#### Child Injector < Root Injector
* the child injector are only created for every lazy loaded modules
* if there are lazy loaded modules it will create its own instance of a service
  * therefore the service will not be singletons anymore



## element injector
* will be created for services which are configured in "@Component()" and "@Directive()"
  * for example: "@Directive({providers: \[XYService\]})"
* it also creates its own hierarchy
  * Element Injector (Root Component) > Element Injector (Child Component)
    * "Provider" for Service is provided in root component
  * Element Injector (Child Component) > Element Injector (Grand Child Component)
    * This compnent has no providers configured
  * Element Injector (Grand Child Component) < Element Injector (Child Component)
    * This component declares dependency on the Service
