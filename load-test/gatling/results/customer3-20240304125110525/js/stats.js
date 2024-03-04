var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1644",
        "ko": "10356"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "255",
        "ko": "99"
    },
    "maxResponseTime": {
        "total": "60527",
        "ok": "47045",
        "ko": "60527"
    },
    "meanResponseTime": {
        "total": "33563",
        "ok": "22208",
        "ko": "35365"
    },
    "standardDeviation": {
        "total": "22386",
        "ok": "13309",
        "ko": "22997"
    },
    "percentiles1": {
        "total": "32920",
        "ok": "30482",
        "ko": "35419"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30644",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "31710",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60091",
        "ok": "34915",
        "ko": "60109"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 243,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1253,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 10356,
    "percentage": 86
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "13.587",
        "ko": "85.587"
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
        "ok": "1644",
        "ko": "10356"
    },
    "minResponseTime": {
        "total": "99",
        "ok": "255",
        "ko": "99"
    },
    "maxResponseTime": {
        "total": "60527",
        "ok": "47045",
        "ko": "60527"
    },
    "meanResponseTime": {
        "total": "33563",
        "ok": "22208",
        "ko": "35365"
    },
    "standardDeviation": {
        "total": "22386",
        "ok": "13309",
        "ko": "22997"
    },
    "percentiles1": {
        "total": "32919",
        "ok": "30482",
        "ko": "35419"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "30644",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "31710",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60091",
        "ok": "34915",
        "ko": "60109"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 148,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 243,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1253,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 10356,
    "percentage": 86
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "13.587",
        "ko": "85.587"
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
