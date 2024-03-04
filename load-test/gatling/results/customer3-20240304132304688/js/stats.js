var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "413",
        "ko": "11587"
    },
    "minResponseTime": {
        "total": "15243",
        "ok": "30547",
        "ko": "15243"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "49011",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "48997",
        "ok": "31272",
        "ko": "49628"
    },
    "standardDeviation": {
        "total": "15021",
        "ok": "1639",
        "ko": "14899"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "31040",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31175",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "32173",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "41639",
        "ko": "60004"
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
    "count": 413,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 11587,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "3.413",
        "ko": "95.76"
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
        "ok": "413",
        "ko": "11587"
    },
    "minResponseTime": {
        "total": "15243",
        "ok": "30547",
        "ko": "15243"
    },
    "maxResponseTime": {
        "total": "60067",
        "ok": "49011",
        "ko": "60067"
    },
    "meanResponseTime": {
        "total": "48997",
        "ok": "31272",
        "ko": "49628"
    },
    "standardDeviation": {
        "total": "15021",
        "ok": "1639",
        "ko": "14899"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "31040",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31175",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "32173",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "41639",
        "ko": "60004"
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
    "count": 413,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 11587,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "3.413",
        "ko": "95.76"
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
