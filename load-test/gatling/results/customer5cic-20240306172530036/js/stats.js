var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5858",
        "ko": "142"
    },
    "minResponseTime": {
        "total": "671",
        "ok": "671",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "23400",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "7116",
        "ok": "6799",
        "ko": "20217"
    },
    "standardDeviation": {
        "total": "5067",
        "ok": "3766",
        "ko": "18003"
    },
    "percentiles1": {
        "total": "6321",
        "ok": "6181",
        "ko": "13169"
    },
    "percentiles2": {
        "total": "9604",
        "ok": "9159",
        "ko": "13361"
    },
    "percentiles3": {
        "total": "13817",
        "ok": "13717",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "16394",
        "ok": "15698",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5826,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 142,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "72.289",
        "ok": "70.578",
        "ko": "1.711"
    }
},
contents: {
"req_account-cic-gql-0fbe2": {
        type: "REQUEST",
        name: "account-cic-gql",
path: "account-cic-gql",
pathFormatted: "req_account-cic-gql-0fbe2",
stats: {
    "name": "account-cic-gql",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5858",
        "ko": "142"
    },
    "minResponseTime": {
        "total": "671",
        "ok": "671",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "23400",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "7116",
        "ok": "6799",
        "ko": "20217"
    },
    "standardDeviation": {
        "total": "5067",
        "ok": "3766",
        "ko": "18003"
    },
    "percentiles1": {
        "total": "6321",
        "ok": "6181",
        "ko": "13169"
    },
    "percentiles2": {
        "total": "9604",
        "ok": "9159",
        "ko": "13361"
    },
    "percentiles3": {
        "total": "13817",
        "ok": "13717",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "16394",
        "ok": "15698",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 29,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5826,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 142,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "72.289",
        "ok": "70.578",
        "ko": "1.711"
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
