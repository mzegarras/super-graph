var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "834",
        "ko": "11166"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "258",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "60561",
        "ok": "55420",
        "ko": "60561"
    },
    "meanResponseTime": {
        "total": "37204",
        "ok": "29866",
        "ko": "37752"
    },
    "standardDeviation": {
        "total": "21440",
        "ok": "8121",
        "ko": "22017"
    },
    "percentiles1": {
        "total": "35342",
        "ok": "30788",
        "ko": "36881"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "32134",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "35192",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60212",
        "ok": "48016",
        "ko": "60223"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 812,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11166,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.893",
        "ko": "92.281"
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
        "ok": "834",
        "ko": "11166"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "258",
        "ko": "102"
    },
    "maxResponseTime": {
        "total": "60561",
        "ok": "55420",
        "ko": "60561"
    },
    "meanResponseTime": {
        "total": "37204",
        "ok": "29866",
        "ko": "37752"
    },
    "standardDeviation": {
        "total": "21440",
        "ok": "8121",
        "ko": "22017"
    },
    "percentiles1": {
        "total": "35347",
        "ok": "30788",
        "ko": "36856"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "32134",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "35192",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60212",
        "ok": "48016",
        "ko": "60223"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 812,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11166,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.893",
        "ko": "92.281"
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
