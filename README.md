# Sandbox: Hexagonal Architecture using multiple tsconfig targets
Personal sandbox belonging to Andreas Coroiu.

Experiments with the usage of multiple tsconfig compilation targets for a hexagonal architecture organized into modules (see organize by component in the book Clean Architecture) with deployments being a separate concern.

## Good to know
- tsconfig.json needs to be present in the dist folder for path mapping to work correctly.

## Microservice
This repository is an example representing (1) one (micro)service. My argument is that a service does not have to be limited to a single artifact/deployable. The service simply encapsulates everything related to a business capability, providing multiple interfaces in and out of the given context.

## Related reading
### Hexagonal Architecture (aka. Ports and Adapters)
- https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)
- https://alistair.cockburn.us/hexagonal-architecture/

### Organize by Component
- "The Missing Chapter" in the book Clean Architecture: https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164

### NPM Workspaces
- https://docs.npmjs.com/cli/v7/using-npm/workspaces

### Microservices
- https://microservices.io/patterns/decomposition/decompose-by-business-capability.html
- https://microservices.io/patterns/decomposition/service-per-team.html
