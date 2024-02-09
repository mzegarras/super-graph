var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10800",
        "ok": "10799",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "776",
        "ok": "776",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54616",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "37413",
        "ok": "37411",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "12700",
        "ok": "12699",
        "ko": "0"
    },
    "percentiles1": {
        "total": "42875",
        "ok": "42871",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "46045",
        "ok": "46044",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "49220",
        "ok": "49219",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "50664",
        "ok": "50661",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10784,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.182",
        "ok": "98.173",
        "ko": "0.009"
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
        "ok": "10799",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "776",
        "ok": "776",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54616",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "37413",
        "ok": "37411",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "12700",
        "ok": "12699",
        "ko": "0"
    },
    "percentiles1": {
        "total": "42876",
        "ok": "42874",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "46045",
        "ok": "46044",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "49220",
        "ok": "49219",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "50664",
        "ok": "50661",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10784,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.182",
        "ok": "98.173",
        "ko": "0.009"
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
