# Sandbox: Hexagonal Architecture using multiple tsconfig projects
Personal sandbox belonging to Andreas Coroiu.

Experiments with the usage of multiple tsconfig compilation projects for a hexagonal architecture organized into modules (see organize by component in the book Clean Architecture) with deployment artifacts being a separate concern. Enables deploying and scaling for performance while organizing code for readability and sustainability. Repository structure also supports polyglot services (each artifact can choose it's own langauage), though typescript is the path of least resistance (and therefore recommended).

## Commentary
- The `dist` folder will only contain the compiled modules that were actually used by that artifact.
- Unfortunately, `node_modules` is common for the entire project, so all dependenices will need to be installed in all deployment artifacts.
- tsconfig.json needs to be present in the dist folder for path mapping to work correctly.
- The `dist` structure needs to contain `src` folders so that the folder structures match. A bit unfortunate.

## Microservice
This repository is an example representing (1) one (micro)service. My argument is that a service does not have to be limited to a single artifact/deployable. The service simply encapsulates everything related to a business capability, providing multiple interfaces in and out of the given context.

### Reasoning
The book "Microservice Patterns" says the following about services:

> An important characteristic of the microservice architecture is that the services are loosely coupled (https://en.wikipedia.org/wiki/Loose_coupling). All interaction with the service happens via its API, which encapsulates its implementation details. This enables the implementation of the  service to change without impacting its clients. Loosely coupled services are key to improving an application’s development time attributes, including its maintainability and testability. They are much easier to understand, change, and test.

When teams are created after business capability or sub-domains, I argue that it is reasonable to assume all code produced by the teams will be highly interconnected. Therefore: 

- By encapsulating everything in a single service we create high cohesion.
- By creating stable and versioned APIs around our service we create loose coupling between teams depending on our service.

The book also says the following:

> You’ll see that the implementation view of a service can take many forms. The component might be a standalone process, a web application or OSGI  bundle running in a container, or a serverless cloud function. An essential requirement, however, is that a service has an API and is independently deployable.

Defining something as a service will instantly raise the requirements for that artifact, necessitating a stable API that is independently deployable. This means that you should almost never be allowed to end up in a situation where deployments of multiple services need to be orchstrated so that nothing breaks. These rules add complexity.

Therefore, by not creating multiple services within one team we remove the overhead that stable APIs and independent deployments entail. We can then use orchestrated deployments, which are easily accomplished within the context of a single team. The same is not true for orchestrating deployments between teams however, where syncing backlogs, rollbacks, etc. risks adding more overhead than just introducing stable APIs and independent deployments. Which is why service boundaries around teams make sense.

## Related reading
### Hexagonal Architecture (aka. Ports and Adapters)
- https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
- https://alistair.cockburn.us/hexagonal-architecture/

### Organize by Component
- "The Missing Chapter" in the book Clean Architecture: https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164

### Microservices
- https://microservices.io/patterns/decomposition/decompose-by-business-capability.html
- https://microservices.io/patterns/decomposition/service-per-team.html
- https://www.amazon.se/Microservice-Patterns-Examples-Chris-Richardson/dp/1617294543
