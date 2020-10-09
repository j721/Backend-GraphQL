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
        name: 'HelloWorld',
        fields: () =>({
            message: {
            type: GraphQLString,
            resolve: ()=> 'HelloWorld'}
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