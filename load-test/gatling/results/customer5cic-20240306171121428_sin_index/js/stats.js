var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "668",
        "ok": "668",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "52219",
        "ok": "52219",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "22478",
        "ok": "22480",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "11032",
        "ok": "11032",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23889",
        "ok": "23895",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "31782",
        "ok": "31782",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "39002",
        "ok": "39003",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "44676",
        "ok": "44676",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5994,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.361",
        "ok": "98.344",
        "ko": "0.016"
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
        "ok": "5999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "668",
        "ok": "668",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "52219",
        "ok": "52219",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "22478",
        "ok": "22480",
        "ko": "10002"
    },
    "standardDeviation": {
        "total": "11032",
        "ok": "11032",
        "ko": "0"
    },
    "percentiles1": {
        "total": "23889",
        "ok": "23894",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "31782",
        "ok": "31782",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "39002",
        "ok": "39003",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "44676",
        "ok": "44676",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5994,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.361",
        "ok": "98.344",
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
