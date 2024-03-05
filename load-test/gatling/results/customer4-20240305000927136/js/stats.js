var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10003",
        "ok": "1511",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "717",
        "ok": "710",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "283",
        "ok": "90",
        "ko": "1"
    },
    "percentiles1": {
        "total": "698",
        "ok": "698",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "763",
        "ok": "763",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "820",
        "ok": "820",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1076",
        "ok": "1062",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5353,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 617,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "166.528",
        "ko": "0.139"
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
        "ok": "5995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "555",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10003",
        "ok": "1511",
        "ko": "10003"
    },
    "meanResponseTime": {
        "total": "717",
        "ok": "710",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "283",
        "ok": "90",
        "ko": "1"
    },
    "percentiles1": {
        "total": "698",
        "ok": "698",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "763",
        "ok": "763",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "821",
        "ok": "820",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "1076",
        "ok": "1062",
        "ko": "10003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5353,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 617,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "166.528",
        "ko": "0.139"
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
