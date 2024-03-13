var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "20567",
        "ko": "3433"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "481",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20015",
        "ok": "18228",
        "ko": "20015"
    },
    "meanResponseTime": {
        "total": "2103",
        "ok": "2035",
        "ko": "2508"
    },
    "standardDeviation": {
        "total": "3358",
        "ok": "3057",
        "ko": "4757"
    },
    "percentiles1": {
        "total": "562",
        "ok": "565",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1795",
        "ok": "1577",
        "ko": "2869"
    },
    "percentiles3": {
        "total": "10039",
        "ok": "8889",
        "ko": "13056"
    },
    "percentiles4": {
        "total": "15659",
        "ok": "14555",
        "ko": "19692"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13370,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1351,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5846,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 3433,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "187.5",
        "ok": "160.68",
        "ko": "26.82"
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
        "ok": "20567",
        "ko": "3433"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "481",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "20015",
        "ok": "18228",
        "ko": "20015"
    },
    "meanResponseTime": {
        "total": "2103",
        "ok": "2035",
        "ko": "2508"
    },
    "standardDeviation": {
        "total": "3358",
        "ok": "3057",
        "ko": "4757"
    },
    "percentiles1": {
        "total": "562",
        "ok": "565",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1795",
        "ok": "1577",
        "ko": "2869"
    },
    "percentiles3": {
        "total": "10039",
        "ok": "8889",
        "ko": "13056"
    },
    "percentiles4": {
        "total": "15659",
        "ok": "14555",
        "ko": "19692"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13370,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1351,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5846,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 3433,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "187.5",
        "ok": "160.68",
        "ko": "26.82"
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
