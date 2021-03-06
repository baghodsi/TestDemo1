# Vahid Demo Project
spring-boot-maven-angular
-----

This is a multi-module Spring Boot Angular Maven starter app with good defaults.
The frontend Angular app is built using [angular-cli](https://cli.angular.io/). The project packages Angular application code as a [WebJar](https://www.webjars.org/). This project is geared towards building monolithic applications.

This project provides productive setup for building Spring Boot Angular applications. The application is divided into two Maven modules:

1. `backend`: This contains Java code of the application.
2. `frontend`: This contains source code for the Angular based frontend.

This project uses following versions:

1. Spring Boot v1.5.9
2. Angular v8.3.26
3. Node v12.16.2
4. Npm v6.14.4

## Running the full application

You can build the package as a single artifact by running the `./mvnw clean install`.
Next, you can run the application by executing:

```bash
$ java -jar backend/target/myapp-backend-0.0.1-SNAPSHOT.jar
```

The application will be accessible at `http://localhost:8080`.

## Running the backend for development mode

There are multiple ways to run the backend. For development, you can use your favorite IDE and run the
`com.example.app.Application`. As soon as your code compiles, Spring Boot DevTools will reload the code.

You can also run the application using Maven.

```bash
$ cd backend
$  ../mvnw spring-boot:run
```

## Running the frontend for development mode

Make sure to install [npm on your development machine](https://www.npmjs.com/get-npm).

To install all the required binaries for your project, you can run following command.

```
$ cd frontend
$ ../mvnw frontend:install-node-and-npm frontend:npm
```

Once the above command finishes, you can start the frontend using the `npm start` command.

## Hot reloading

Both the front-end and back-end modules support hot reloading.
# TestDemo
