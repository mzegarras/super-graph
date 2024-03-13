var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "23958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "486",
        "ok": "486",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10010",
        "ok": "9063",
        "ko": "10010"
    },
    "meanResponseTime": {
        "total": "1711",
        "ok": "1697",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "2058",
        "ok": "2030",
        "ko": "2"
    },
    "percentiles1": {
        "total": "548",
        "ok": "548",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "2153",
        "ok": "2132",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6291",
        "ok": "6250",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "8193",
        "ok": "8124",
        "ko": "10008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15297,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1313,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7348,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "194.78",
        "ko": "0.341"
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
        "ok": "23958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "486",
        "ok": "486",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10010",
        "ok": "9063",
        "ko": "10010"
    },
    "meanResponseTime": {
        "total": "1711",
        "ok": "1697",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "2058",
        "ok": "2030",
        "ko": "2"
    },
    "percentiles1": {
        "total": "548",
        "ok": "548",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "2153",
        "ok": "2132",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "6291",
        "ok": "6250",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "8193",
        "ok": "8124",
        "ko": "10008"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15297,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1313,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7348,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 42,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "194.78",
        "ko": "0.341"
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
