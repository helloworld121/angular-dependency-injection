// how a service might look like
class UserService {
  printUsername(): void {
    console.log('Hello World!');
  }
}

// the service is injected using the constructor
class Component {
  constructor(public user: UserService) { }
}


// "Angular" DI
// how the Injector in Angular works
// => the Injector class creates the instances and manages them
class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => this._container.set(service, new service()));
  }

  get(service: any): any {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No provider found');
    }
    return serviceInstance;
  }
}


// when Angular starts it creates an instance of Injector and passes all services and directives
// that are for example annotated...
const injector = new Injector([UserService]);

// when Angular creates an instance of our component it does something like this
const component = new Component(injector.get(UserService));

// now the service can be used
component.user.printUsername();
