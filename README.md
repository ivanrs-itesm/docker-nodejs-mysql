## A Docker Compose Example for NodeJS and MYSQL

**Instructions**

- Inside `/mysql-database` is the configuration file for database container

- Inside `/web-nodejs` is the server file and simple route for testint the database

- Within the file `docker-compose.yml` is the configuration neede to connect both container (database and web server)

Run the following to set up everything (you should have installed docker)

    docker-compose up

Then you can access to `http://localhost:3000/`
