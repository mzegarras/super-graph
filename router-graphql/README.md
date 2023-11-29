
```
service:super-bank:1kW4k9OmDlqrZcV1LnR8hg

```

````
  super-graphql:
    image: ghcr.io/apollographql/router:v1.32.0
    platform: linux/amd64
    environment:
      - APOLLO_GRAPH_REF=https://current--super-bank.apollographos.net/graphql
      - APOLLO_KEY=service:super-bank:1kW4k9OmDlqrZcV1LnR8hg
    ports:
      - "4000:4000"
````

```
rover subgraph publish super-bank@current \
  --schema ./ms-customers-graphql/src/main/resources/schema/customers.graphql
  --name customers-subgraphs \
  --routing-url https://dev-ms-customers-graphql-sg.azurewebsites.net/graphql
```