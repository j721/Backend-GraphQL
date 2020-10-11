# Backend-GraphQL

GraphQL is a query-based language used to built apis. GraphQL apis are organized into types and fields. 

GraphQL is different from a REST api, where instead of creating multiple different endpoints to retrieve specific parts of the data, only one single endpoint needs to created from graphQL to achieve that. 

All of the data is returned from a single endpoint in graphQL. The way that the data is being returned from that single endpoint is based on the query that gets sent to that single endpoint. Able to query specific information, even query nested information from a database all from one single request to the server.  

GraphQL also allows you mutate data on your server, meaning that we able to create, update, and delete data similar to how a REST api would. Also, able to specify what information you want to be returned from those mutated queries. 

In this project a basic GraphQL server was created. A simple api of books and authors.