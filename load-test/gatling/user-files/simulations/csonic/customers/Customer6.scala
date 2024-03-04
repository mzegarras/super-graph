package csonic.customers

import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder
import io.gatling.http.request.builder.HttpRequestBuilder.toActionBuilder

import scala.concurrent.duration._
import java.time.format.DateTimeFormatter

class Customer6 extends Simulation {

    val csvCicData = csv("data/customers_cic.csv").circular
    val csvIdcData = csv("data/customers_idc.csv").circular

  val httpConf01 =
    //http.baseUrl("https://current--super-bank.apollographos.net")
    http.baseUrl("https://dev-dgs-customers.azurewebsites.net")


  val theCommonHeaders = Map(
        "accept" -> "application/json",
        "Content-Type" -> "application/json",
    "apollographql-client-name" -> "gatling_customer6",
    "apollographql-client-version" -> "1.0.0"
      )
     
    val scn_customer_cic_gql = scenario("customer-cic-gql")
    .feed(csvCicData)
    .exec(
      http("account-cic-gql")
        .post("/graphql")
        .headers(theCommonHeaders)
        .body(ElFileBody("templates/customer_cic_3.json")).asJson
        .check(status is 200)
    ).pause(0)




  val scn_customer_idc_gql = scenario("customer-gql")
    .feed(csvIdcData)
    .exec(
      http("account-idc-gql")
        .post("/graphql")
        .headers(theCommonHeaders)
        .body(ElFileBody("templates/customer_idc.json")).asJson
        .check(status is 200)
    ).pause(0)


  val accountStressAll = scenario("IDC&CIC")
    .exec(scn_customer_cic_gql)
    .exec(scn_customer_idc_gql)

    setUp(
      accountStressAll.inject(constantUsersPerSec(100).during (320.seconds)).protocols(httpConf01)
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

}