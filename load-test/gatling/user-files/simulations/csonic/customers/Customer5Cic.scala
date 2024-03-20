package csonic.customers

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

import scala.concurrent.duration._
import java.time.format.DateTimeFormatter

class Customer5Cic extends Simulation {

  val csvData = csv("data/customers_cic.csv").circular

  val httpConf01 =
    //http.baseUrl("https://current--super-bank.apollographos.net")
    http.baseUrl("https://dev-dgs-customers.azurewebsites.net")
    //http.baseUrl("https://azapimeu2apig01.azure-api.net")


  val theCommonHeaders = Map(
        //"accept" -> "application/json",
        "Content-Type" -> "application/json",
        //"apollographql-client-name" -> "gatling_customer6",
        //"apollographql-client-version" -> "1.0.0"
      )
     
    val scn_customer_cic_gql = scenario("customer-cic-gql")
    .feed(csvData)
    .exec(
      http("account-cic-gql")
        .post("/graphql")
        //.post("/customers-ql")
        .headers(theCommonHeaders)
        .body(ElFileBody("templates/customer5_cic.json")).asJson
        .check(status is 200)
    ).pause(0)



  val accountStressAll = scenario("CIC")
    .exec(scn_customer_cic_gql)


    setUp(
      //accountStressAll.inject(rampUsers(10).during(60.seconds)).protocols(httpConf01)
          accountStressAll.inject(constantUsersPerSec(200).during (60.seconds)).protocols(httpConf01)
          //accountStressAll.inject(rampUsersPerSec(200).to(201).during(60.seconds)).protocols(httpConf01)
          //scn_customer_gql.inject(constantUsersPerSec(100).during (20.seconds)).protocols(httpConf01)
        //scn_customer_gql.inject(constantUsersPerSec(200).during (40.seconds)).protocols(httpConf01)
        //scn_customer_gql.inject(rampUsersPerSec(50).to(100).during(90.seconds)).protocols(httpConf01)
        //scn_customer_gql.inject(rampUsersPerSec(50).to(100).during(90.seconds)).protocols(httpConf01)
        //scn_account_query.inject(rampUsersPerSec(10).to(20).during(60.seconds)).protocols(httpConf02)
        //scn_account_query.inject(rampUsersPerSec(10).to(12).during(60.seconds)).protocols(httpConf02)
        //scn_account_save.inject(rampUsersPerSec(10).to(50).during(20.seconds)).protocols(httpConf02)
        //accountStressAll.inject(rampUsers(100).during(40.seconds)).protocols(httpConf02)
        //accountStressAll.inject(constantUsersPerSec(100).during (40.seconds)).protocols(httpConf02)

    )

}
