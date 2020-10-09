const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP

const app = express()

//routes
app.use('/graphql', expressGraphQL({
    graphiql: true
}));




//Port
app.listen(5000, ()=>{
    console.log('server is running')
})