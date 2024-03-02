var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "14799",
        "ko": "3201"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10872",
        "ok": "10872",
        "ko": "10406"
    },
    "meanResponseTime": {
        "total": "3458",
        "ok": "2037",
        "ko": "10030"
    },
    "standardDeviation": {
        "total": "3733",
        "ok": "2363",
        "ko": "53"
    },
    "percentiles1": {
        "total": "904",
        "ok": "808",
        "ko": "10004"
    },
    "percentiles2": {
        "total": "6595",
        "ok": "1910",
        "ko": "10037"
    },
    "percentiles3": {
        "total": "10034",
        "ok": "8206",
        "ko": "10144"
    },
    "percentiles4": {
        "total": "10151",
        "ok": "8970",
        "ko": "10243"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7063,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2648,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5088,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 3201,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "257.143",
        "ok": "211.414",
        "ko": "45.729"
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
        "total": "18000",
        "ok": "14799",
        "ko": "3201"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10872",
        "ok": "10872",
        "ko": "10406"
    },
    "meanResponseTime": {
        "total": "3458",
        "ok": "2037",
        "ko": "10030"
    },
    "standardDeviation": {
        "total": "3733",
        "ok": "2363",
        "ko": "53"
    },
    "percentiles1": {
        "total": "904",
        "ok": "808",
        "ko": "10004"
    },
    "percentiles2": {
        "total": "6595",
        "ok": "1910",
        "ko": "10037"
    },
    "percentiles3": {
        "total": "10034",
        "ok": "8206",
        "ko": "10144"
    },
    "percentiles4": {
        "total": "10151",
        "ok": "8970",
        "ko": "10243"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7063,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2648,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5088,
    "percentage": 28
},
    "group4": {
    "name": "failed",
    "count": 3201,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "257.143",
        "ok": "211.414",
        "ko": "45.729"
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