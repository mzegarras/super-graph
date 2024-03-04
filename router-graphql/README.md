
````
  super-graphql:
    image: ghcr.io/apollographql/router:v1.32.0
    platform: linux/amd64
    environment:
      - APOLLO_GRAPH_REF=https://current--super-bank.apollographos.net/graphql
      - APOLLO_KEY=service:super-bank:11111
    ports:
      - "4000:4000"
````

```
export APOLLO_KEY=''
rover subgraph publish super-bank@current --name customers-subgraphs --schema ./ms-customers-graphql/src/main/resources/schema/customers.graphql  \
  --routing-url https://dev-ms-customers-graphql-sg.azurewebsites.net/graphql
  
rover subgraph check super-bank@current  --name customers-subgraphs --schema ./ms-customers-graphql/src/main/resources/schema/customers.graphql

rover subgraph check super-bank@current  --name accounts-subgraphs --schema ./ms-accounts-graphql/src/main/resources/schema/accounts.graphql

rover subgraph publish super-bank@current --name accounts-subgraphs --schema ./ms-accounts-graphql/src/main/resources/schema/accounts.graphql \
   --routing-url https://dev-ms-accounts-graphql-sg.azurewebsites.net/graphql
   
rover subgraph check super-bank@current  --name risks-subgraphs --schema ./ms-risks-graphql/src/main/resources/schema/risks.graphql

rover subgraph publish super-bank@current --name risks-subgraphs --schema ./ms-risks-graphql/src/main/resources/schema/risks.graphql \
   --routing-url https://dev-ms-risks-graphql-sg.azurewebsites.net/graphql
```