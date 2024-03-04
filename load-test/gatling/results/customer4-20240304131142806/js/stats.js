var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "934",
        "ko": "5066"
    },
    "minResponseTime": {
        "total": "219",
        "ok": "339",
        "ko": "219"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "59149",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "27979",
        "ok": "30048",
        "ko": "27597"
    },
    "standardDeviation": {
        "total": "17219",
        "ok": "6465",
        "ko": "18507"
    },
    "percentiles1": {
        "total": "31408",
        "ok": "30590",
        "ko": "32944"
    },
    "percentiles2": {
        "total": "38221",
        "ok": "30719",
        "ko": "40305"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "32482",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "49453",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 918,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 5066,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "10.378",
        "ko": "56.289"
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
        "total": "6000",
        "ok": "934",
        "ko": "5066"
    },
    "minResponseTime": {
        "total": "219",
        "ok": "339",
        "ko": "219"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "59149",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "27979",
        "ok": "30048",
        "ko": "27597"
    },
    "standardDeviation": {
        "total": "17219",
        "ok": "6465",
        "ko": "18507"
    },
    "percentiles1": {
        "total": "31408",
        "ok": "30589",
        "ko": "32944"
    },
    "percentiles2": {
        "total": "38221",
        "ok": "30718",
        "ko": "40305"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "32482",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "49453",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 918,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 5066,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "66.667",
        "ok": "10.378",
        "ko": "56.289"
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
