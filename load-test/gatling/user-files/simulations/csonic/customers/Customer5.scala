package csonic.customers

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

import scala.concurrent.duration._
import java.time.format.DateTimeFormatter

class Customer5 extends Simulation {

    val csvData = csv("data/customers_cic.csv").circular

    val httpConf01 =
      http.baseUrl("https://dev-dgs-customers.azurewebsites.net")

    val theCommonHeaders = Map(
        "accept" -> "application/json",
        "Content-Type" -> "application/json",
      )
     
    val scn_customer_gql = scenario("customer-gql")
    .feed(csvData)
    .exec(
      http("account-gql")
        .post("/graphql")
        .headers(theCommonHeaders)
        .body(ElFileBody("templates/customer_cic_3.json")).asJson
        .check(status is 200)
    ).pause(0)




    setUp(
          scn_customer_gql.inject(constantUsersPerSec(200).during (60.seconds)).protocols(httpConf01)
          //scn_customer_gql.inject(rampUsersPerSec(10).to(40).during(60.seconds)).protocols(httpConf01)
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

} /*
setUp(scn.inject(constantUsersPerSec(500) during (10 minutes))).throttle(
reachRps(300) in (10 seconds),
holdFor(5 minutes),
reachRps(500) in (10 seconds),
holdFor(5 minutes)
).protocols(httpProtocol)
*/