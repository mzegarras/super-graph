var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "24000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9156",
        "ok": "9156",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1990",
        "ok": "1990",
        "ko": "-"
    },
    "percentiles1": {
        "total": "786",
        "ok": "787",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2168",
        "ok": "2168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6350",
        "ok": "6350",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8485",
        "ok": "8485",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12682,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3054,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8264,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "195.122",
        "ko": "-"
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
        "ok": "24000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9156",
        "ok": "9156",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1857",
        "ok": "1857",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1990",
        "ok": "1990",
        "ko": "-"
    },
    "percentiles1": {
        "total": "786",
        "ok": "786",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2168",
        "ok": "2168",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6350",
        "ok": "6350",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8485",
        "ok": "8485",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12682,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3054,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8264,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "195.122",
        "ok": "195.122",
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
