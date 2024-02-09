var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "2210",
        "ko": "8590"
    },
    "minResponseTime": {
        "total": "562",
        "ok": "5335",
        "ko": "562"
    },
    "maxResponseTime": {
        "total": "60143",
        "ok": "60005",
        "ko": "60143"
    },
    "meanResponseTime": {
        "total": "47604",
        "ok": "51537",
        "ko": "46592"
    },
    "standardDeviation": {
        "total": "20655",
        "ok": "8131",
        "ko": "22680"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "53152",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "56481",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "59440",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60025",
        "ok": "59840",
        "ko": "60028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2210,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 8590,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.256",
        "ok": "18.264",
        "ko": "70.992"
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
        "total": "10800",
        "ok": "2210",
        "ko": "8590"
    },
    "minResponseTime": {
        "total": "562",
        "ok": "5335",
        "ko": "562"
    },
    "maxResponseTime": {
        "total": "60143",
        "ok": "60005",
        "ko": "60143"
    },
    "meanResponseTime": {
        "total": "47604",
        "ok": "51537",
        "ko": "46592"
    },
    "standardDeviation": {
        "total": "20655",
        "ok": "8131",
        "ko": "22680"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "53152",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "56481",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "59440",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60025",
        "ok": "59840",
        "ko": "60028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2210,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 8590,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.256",
        "ok": "18.264",
        "ko": "70.992"
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
