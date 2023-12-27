# GraphQL - Mock Server
1.  Endpoint
    * https://current--super-bank.apollographos.net/graphql
   2. Querys
       * Buscar clientes por apellidos y nombres
       ```
       query {
         customerSearch(filter: { lastName: "a" }) {
           id
           lastName
           firstName
           phones {
             phone
             createDateTime
           }
           accounts {
             id
             number
             balance
           }
           evaluation {
             moodys
             sbs
           }
         }
       }
       ```
       ```shell
        curl --location 'https://current--super-bank.apollographos.net/graphql' \
        --header 'Content-Type: application/json' \
        --data '{"query":"{\n    customerSearch(filter: { lastName: \"a\" }) {\n        id\n        lastName\n        firstName\n        phones {\n            phone\n            createDateTime\n        }\n        accounts {\n            id\n            number\n            balance\n        }\n        evaluation {\n            moodys\n            sbs\n        }\n    }\n}\n","variables":{}}'
        ```  

      * Cliente por ID
           ```
           query{
               customer(filter: { id:  "e0ef38de-1b1d-4b68-b7a3-40b2460bc043" }) {
                   id
                   lastName
                   accounts {
                       id
                       balance
                   }
               }
           }
           ```
           ```shell
            curl --location 'https://current--super-bank.apollographos.net/graphql' \
            --header 'Content-Type: application/json' \
            --data '{"query":"query{\n               customer(filter: { id:  \"e0ef38de-1b1d-4b68-b7a3-40b2460bc043\" }) {\n                   id\n                   lastName\n                   accounts {\n                       id\n                       balance\n                   }\n               }\n           }","variables":{}}'
            ```  

      * Cuentas por clienteId
           ```
           query{
             accountsByCustomer(filter: {customerId:"e0ef38de-1b1d-4b68-b7a3-40b2460bc043"} ) {
               balance
               id
               currency
               number
             }
           }
           ```
        
           ```shell
            curl --location 'https://current--super-bank.apollographos.net/graphql' \
            --header 'Content-Type: application/json' \
            --data '{"query":"           query{\n             accountsByCustomer(filter: {customerId:\"e0ef38de-1b1d-4b68-b7a3-40b2460bc043\"} ) {\n               balance\n               id\n               currency\n               number\n             }\n           }","variables":{}}'
           ```  
        
      * Evaluación por clienteId
           ```
            query{
             evaluation(customerID: "e0ef38de-1b1d-4b68-b7a3-40b2460bc043") {
               customerId
               sbs
               pcr
               moodys
             }
           }
           ```
           ```shell
            curl --location 'https://current--super-bank.apollographos.net/graphql' \
            --header 'Content-Type: application/json' \
            --data '{"query":" query{\n             evaluation(customerID: \"e0ef38de-1b1d-4b68-b7a3-40b2460bc043\") {\n               customerId\n               sbs\n               pcr\n               moodys\n             }\n           }","variables":{}}'
            ```  

3. Datos de clientes
