var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "804",
        "ko": "11196"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "291",
        "ko": "220"
    },
    "maxResponseTime": {
        "total": "60496",
        "ok": "41099",
        "ko": "60496"
    },
    "meanResponseTime": {
        "total": "45265",
        "ok": "29410",
        "ko": "46403"
    },
    "standardDeviation": {
        "total": "18849",
        "ok": "6225",
        "ko": "18939"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30611",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30754",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "31624",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60126",
        "ok": "33389",
        "ko": "60133"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 783,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11196,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.645",
        "ko": "92.529"
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
        "ok": "804",
        "ko": "11196"
    },
    "minResponseTime": {
        "total": "220",
        "ok": "291",
        "ko": "220"
    },
    "maxResponseTime": {
        "total": "60496",
        "ok": "41099",
        "ko": "60496"
    },
    "meanResponseTime": {
        "total": "45265",
        "ok": "29410",
        "ko": "46403"
    },
    "standardDeviation": {
        "total": "18849",
        "ok": "6225",
        "ko": "18939"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30611",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30754",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "31624",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60126",
        "ok": "33389",
        "ko": "60133"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 783,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11196,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.645",
        "ko": "92.529"
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
