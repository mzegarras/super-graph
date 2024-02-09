var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4725",
        "ok": "4725",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles1": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "percentiles2": {
        "total": "764",
        "ok": "764",
        "ko": "-"
    },
    "percentiles3": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1019",
        "ok": "1019",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4141,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 579,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "51.923",
        "ok": "51.923",
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
        "total": "4725",
        "ok": "4725",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "percentiles1": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "percentiles2": {
        "total": "764",
        "ok": "764",
        "ko": "-"
    },
    "percentiles3": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1019",
        "ok": "1019",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4141,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 579,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "51.923",
        "ok": "51.923",
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
