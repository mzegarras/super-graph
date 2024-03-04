var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "757",
        "ko": "11243"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "265",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "60431",
        "ok": "46330",
        "ko": "60431"
    },
    "meanResponseTime": {
        "total": "37444",
        "ok": "29383",
        "ko": "37987"
    },
    "standardDeviation": {
        "total": "21668",
        "ok": "7675",
        "ko": "22192"
    },
    "percentiles1": {
        "total": "35342",
        "ok": "30788",
        "ko": "36969"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31633",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "34333",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60114",
        "ok": "35851",
        "ko": "60125"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 738,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 11243,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.256",
        "ko": "92.917"
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
        "ok": "757",
        "ko": "11243"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "265",
        "ko": "101"
    },
    "maxResponseTime": {
        "total": "60431",
        "ok": "46330",
        "ko": "60431"
    },
    "meanResponseTime": {
        "total": "37444",
        "ok": "29383",
        "ko": "37987"
    },
    "standardDeviation": {
        "total": "21668",
        "ok": "7675",
        "ko": "22192"
    },
    "percentiles1": {
        "total": "35342",
        "ok": "30788",
        "ko": "36956"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "31633",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "34333",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60114",
        "ok": "35851",
        "ko": "60125"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 738,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 11243,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "6.256",
        "ko": "92.917"
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
