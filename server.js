const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP
const{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello World',
        fields: () =>({
            message: {
            type: GraphQLString,
            resolve: ()=> 'Hello World'}
        })
    })
})

//routes
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true      //allows you to run graphiQL in local server
}));




//Port
app.listen(5000, ()=>{
    console.log('server is running')
})