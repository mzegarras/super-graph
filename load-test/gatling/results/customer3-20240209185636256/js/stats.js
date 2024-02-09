var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "4244",
        "ko": "6556"
    },
    "minResponseTime": {
        "total": "544",
        "ok": "572",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "60283",
        "ok": "2915",
        "ko": "60283"
    },
    "meanResponseTime": {
        "total": "28312",
        "ok": "1092",
        "ko": "45933"
    },
    "standardDeviation": {
        "total": "29427",
        "ok": "344",
        "ko": "25224"
    },
    "percentiles1": {
        "total": "1579",
        "ok": "975",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "1286",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "1792",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60027",
        "ok": "2191",
        "ko": "60038"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 752,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2174,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1318,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 6556,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.429",
        "ok": "37.893",
        "ko": "58.536"
    }
},
contents: {
"req_account-gql-88cc6": {
        type: "REQUEST",
        name: "account-gql",
path: "account-gql",
pathFormatted: "req_account-gql-88cc6",
stats: {
    "name": "account-gql",
    "numberOfRequests": {
        "total": "10800",
        "ok": "4244",
        "ko": "6556"
    },
    "minResponseTime": {
        "total": "544",
        "ok": "572",
        "ko": "544"
    },
    "maxResponseTime": {
        "total": "60283",
        "ok": "2915",
        "ko": "60283"
    },
    "meanResponseTime": {
        "total": "28312",
        "ok": "1092",
        "ko": "45933"
    },
    "standardDeviation": {
        "total": "29427",
        "ok": "344",
        "ko": "25224"
    },
    "percentiles1": {
        "total": "1579",
        "ok": "975",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "1286",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60006",
        "ok": "1792",
        "ko": "60011"
    },
    "percentiles4": {
        "total": "60027",
        "ok": "2191",
        "ko": "60038"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 752,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2174,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1318,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 6556,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "96.429",
        "ok": "37.893",
        "ko": "58.536"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
