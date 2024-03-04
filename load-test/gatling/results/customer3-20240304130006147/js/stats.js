var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "776",
        "ko": "11224"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "316",
        "ko": "222"
    },
    "maxResponseTime": {
        "total": "60316",
        "ok": "55152",
        "ko": "60316"
    },
    "meanResponseTime": {
        "total": "38319",
        "ok": "29124",
        "ko": "38955"
    },
    "standardDeviation": {
        "total": "21533",
        "ok": "7832",
        "ko": "22028"
    },
    "percentiles1": {
        "total": "36176",
        "ok": "30656",
        "ko": "38809"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30977",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "34047",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "36833",
        "ko": "60023"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 751,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 11224,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.413",
        "ko": "92.76"
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
        "ok": "776",
        "ko": "11224"
    },
    "minResponseTime": {
        "total": "222",
        "ok": "316",
        "ko": "222"
    },
    "maxResponseTime": {
        "total": "60316",
        "ok": "55152",
        "ko": "60316"
    },
    "meanResponseTime": {
        "total": "38319",
        "ok": "29124",
        "ko": "38955"
    },
    "standardDeviation": {
        "total": "21533",
        "ok": "7832",
        "ko": "22028"
    },
    "percentiles1": {
        "total": "36172",
        "ok": "30656",
        "ko": "38809"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30977",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "34047",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60020",
        "ok": "36833",
        "ko": "60023"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 751,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 11224,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.413",
        "ko": "92.76"
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
