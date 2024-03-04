var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "905",
        "ko": "11095"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "359",
        "ko": "95"
    },
    "maxResponseTime": {
        "total": "60537",
        "ok": "55406",
        "ko": "60537"
    },
    "meanResponseTime": {
        "total": "37650",
        "ok": "31255",
        "ko": "38172"
    },
    "standardDeviation": {
        "total": "21658",
        "ok": "7228",
        "ko": "22349"
    },
    "percentiles1": {
        "total": "35685",
        "ok": "30840",
        "ko": "37440"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "32422",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "40543",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60149",
        "ok": "50833",
        "ko": "60160"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 895,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11095,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "7.479",
        "ko": "91.694"
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
        "ok": "905",
        "ko": "11095"
    },
    "minResponseTime": {
        "total": "95",
        "ok": "359",
        "ko": "95"
    },
    "maxResponseTime": {
        "total": "60537",
        "ok": "55406",
        "ko": "60537"
    },
    "meanResponseTime": {
        "total": "37650",
        "ok": "31255",
        "ko": "38172"
    },
    "standardDeviation": {
        "total": "21658",
        "ok": "7228",
        "ko": "22349"
    },
    "percentiles1": {
        "total": "35689",
        "ok": "30840",
        "ko": "37452"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "32422",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "40543",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60149",
        "ok": "50833",
        "ko": "60160"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 895,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 11095,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "7.479",
        "ko": "91.694"
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
