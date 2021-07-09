# Sandbox: Hexagonal Architecture using multiple tsconfig projects
Personal sandbox belonging to Andreas Coroiu.

Experiments with the usage of multiple tsconfig compilation projects for a hexagonal architecture organized into modules (see organize by component in the book Clean Architecture) with deployments being a separate concern.

## Commentary
- The `dist` folder should only contain the modules that were actually used by that deployment.
- Unfortunately, `node_modules` is common for the entire project, so all dependenices will need to be installed in all deployemnts.
- tsconfig.json needs to be present in the dist folder for path mapping to work correctly.
- The `dist` structure needs to contain `src` folders so that the folder structures match. A bit unfortunate.

## Microservice
This repository is an example representing (1) one (micro)service. My argument is that a service does not have to be limited to a single artifact/deployable. The service simply encapsulates everything related to a business capability, providing multiple interfaces in and out of the given context.

## Related reading
### Hexagonal Architecture (aka. Ports and Adapters)
- https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
- https://alistair.cockburn.us/hexagonal-architecture/

### Organize by Component
- "The Missing Chapter" in the book Clean Architecture: https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164

### Microservices
- https://microservices.io/patterns/decomposition/decompose-by-business-capability.html
- https://microservices.io/patterns/decomposition/service-per-team.html
