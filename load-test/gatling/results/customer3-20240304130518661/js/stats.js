var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "886",
        "ko": "11114"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "255",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "60422",
        "ok": "55821",
        "ko": "60422"
    },
    "meanResponseTime": {
        "total": "37174",
        "ok": "30130",
        "ko": "37736"
    },
    "standardDeviation": {
        "total": "21658",
        "ok": "7193",
        "ko": "22318"
    },
    "percentiles1": {
        "total": "35296",
        "ok": "30638",
        "ko": "37086"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31040",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "36845",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "48374",
        "ko": "60149"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 871,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11114,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "7.322",
        "ko": "91.851"
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
        "ok": "886",
        "ko": "11114"
    },
    "minResponseTime": {
        "total": "98",
        "ok": "255",
        "ko": "98"
    },
    "maxResponseTime": {
        "total": "60422",
        "ok": "55821",
        "ko": "60422"
    },
    "meanResponseTime": {
        "total": "37174",
        "ok": "30130",
        "ko": "37736"
    },
    "standardDeviation": {
        "total": "21658",
        "ok": "7193",
        "ko": "22318"
    },
    "percentiles1": {
        "total": "35295",
        "ok": "30638",
        "ko": "37112"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31040",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "36845",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "48374",
        "ko": "60149"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 871,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11114,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "7.322",
        "ko": "91.851"
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
