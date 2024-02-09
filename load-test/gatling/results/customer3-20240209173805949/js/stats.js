var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "7403",
        "ko": "1597"
    },
    "minResponseTime": {
        "total": "493",
        "ok": "493",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10296",
        "ok": "8013",
        "ko": "10296"
    },
    "meanResponseTime": {
        "total": "2391",
        "ok": "749",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "3593",
        "ok": "706",
        "ko": "12"
    },
    "percentiles1": {
        "total": "693",
        "ok": "666",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "801",
        "ok": "733",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "829",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "10009",
        "ok": "2864",
        "ko": "10028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6732,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 568,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 103,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1597,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "126.761",
        "ok": "104.268",
        "ko": "22.493"
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
        "total": "9000",
        "ok": "7403",
        "ko": "1597"
    },
    "minResponseTime": {
        "total": "493",
        "ok": "493",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "10296",
        "ok": "8013",
        "ko": "10296"
    },
    "meanResponseTime": {
        "total": "2391",
        "ok": "749",
        "ko": "10003"
    },
    "standardDeviation": {
        "total": "3593",
        "ok": "706",
        "ko": "12"
    },
    "percentiles1": {
        "total": "693",
        "ok": "666",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "801",
        "ok": "733",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "10001",
        "ok": "829",
        "ko": "10010"
    },
    "percentiles4": {
        "total": "10009",
        "ok": "2864",
        "ko": "10028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6732,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 568,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 103,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 1597,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "126.761",
        "ok": "104.268",
        "ko": "22.493"
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
