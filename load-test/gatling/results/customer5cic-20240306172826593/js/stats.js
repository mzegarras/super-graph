var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14207",
        "ok": "14207",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4251",
        "ok": "4251",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4096",
        "ok": "4096",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5917",
        "ok": "5917",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7974",
        "ok": "7974",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9693",
        "ok": "9693",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 294,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5671,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "166.667",
        "ko": "-"
    }
},
contents: {
"req_account-cic-gql-0fbe2": {
        type: "REQUEST",
        name: "account-cic-gql",
path: "account-cic-gql",
pathFormatted: "req_account-cic-gql-0fbe2",
stats: {
    "name": "account-cic-gql",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14207",
        "ok": "14207",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4251",
        "ok": "4251",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2130",
        "ok": "2130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4096",
        "ok": "4096",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5917",
        "ok": "5917",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7974",
        "ok": "7974",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9693",
        "ok": "9693",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 294,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5671,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "166.667",
        "ko": "-"
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
