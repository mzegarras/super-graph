# GraphQL - Mock Server
0. Endpoint
    * https://current--super-bank.apollographos.net/graphql
1. Querys
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
   * Buscar cliente por ID
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

   * Buscar cuentas por clienteId
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
   * Buscar evaluación por clienteId
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
2. Datos de clientes
3. sas
4. 
