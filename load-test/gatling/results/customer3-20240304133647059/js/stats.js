var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "11923",
        "ko": "77"
    },
    "minResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10016",
        "ok": "9235",
        "ko": "10016"
    },
    "meanResponseTime": {
        "total": "2225",
        "ok": "2175",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "2293",
        "ok": "2213",
        "ko": "3"
    },
    "percentiles1": {
        "total": "893",
        "ok": "886",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "3568",
        "ok": "3419",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "7672",
        "ok": "7614",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "8409",
        "ok": "8155",
        "ko": "10015"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5455,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1250,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5218,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 77,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "196.721",
        "ok": "195.459",
        "ko": "1.262"
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
        "total": "12000",
        "ok": "11923",
        "ko": "77"
    },
    "minResponseTime": {
        "total": "481",
        "ok": "481",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10016",
        "ok": "9235",
        "ko": "10016"
    },
    "meanResponseTime": {
        "total": "2225",
        "ok": "2175",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "2293",
        "ok": "2213",
        "ko": "3"
    },
    "percentiles1": {
        "total": "893",
        "ok": "886",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "3568",
        "ok": "3419",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "7672",
        "ok": "7614",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "8409",
        "ok": "8155",
        "ko": "10015"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5455,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1250,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5218,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 77,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "196.721",
        "ok": "195.459",
        "ko": "1.262"
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
