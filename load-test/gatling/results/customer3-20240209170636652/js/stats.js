var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8213",
        "ok": "8213",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1192",
        "ok": "1192",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "percentiles1": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1135",
        "ok": "1135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2799",
        "ok": "2799",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4520",
        "ok": "4520",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2218,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3944,
    "percentage": 49
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1838,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "190.476",
        "ok": "190.476",
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
        "total": "8000",
        "ok": "8000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8213",
        "ok": "8213",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1192",
        "ok": "1192",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "percentiles1": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1135",
        "ok": "1135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2799",
        "ok": "2799",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4520",
        "ok": "4520",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2218,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3944,
    "percentage": 49
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1838,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "190.476",
        "ok": "190.476",
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
