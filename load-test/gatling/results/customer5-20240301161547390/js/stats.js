var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "563",
        "ok": "563",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7846",
        "ok": "7846",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "percentiles1": {
        "total": "750",
        "ok": "750",
        "ko": "-"
    },
    "percentiles2": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4996",
        "ok": "4996",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6230",
        "ok": "6230",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7728,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1855,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2417,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "184.615",
        "ok": "184.615",
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
        "total": "12000",
        "ok": "12000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "563",
        "ok": "563",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7846",
        "ok": "7846",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1461",
        "ok": "1461",
        "ko": "-"
    },
    "percentiles1": {
        "total": "750",
        "ok": "750",
        "ko": "-"
    },
    "percentiles2": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4996",
        "ok": "4996",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6230",
        "ok": "6230",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7728,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1855,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2417,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "184.615",
        "ok": "184.615",
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
