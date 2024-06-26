var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "23998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "8171",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "1629",
        "ok": "1628",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "1967",
        "ok": "1966",
        "ko": "0"
    },
    "percentiles1": {
        "total": "539",
        "ok": "539",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "1954",
        "ok": "1954",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "6003",
        "ok": "6002",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "7629",
        "ok": "7628",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16100,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 937,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6961,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "192",
        "ok": "191.984",
        "ko": "0.016"
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
        "total": "24000",
        "ok": "23998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "479",
        "ok": "479",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "8171",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "1629",
        "ok": "1628",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "1967",
        "ok": "1966",
        "ko": "0"
    },
    "percentiles1": {
        "total": "539",
        "ok": "539",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "1954",
        "ok": "1954",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "6003",
        "ok": "6002",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "7629",
        "ok": "7628",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16100,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 937,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6961,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "192",
        "ok": "191.984",
        "ko": "0.016"
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
