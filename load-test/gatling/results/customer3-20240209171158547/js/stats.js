var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "854",
        "ok": "854",
        "ko": "60003"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "28939",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "19307",
        "ok": "19300",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "6338",
        "ok": "6317",
        "ko": "0"
    },
    "percentiles1": {
        "total": "22177",
        "ok": "22176",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "23817",
        "ok": "23817",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "25188",
        "ok": "25188",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "26596",
        "ok": "26594",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5963,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "65.207",
        "ko": "0.011"
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
        "total": "6000",
        "ok": "5999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "854",
        "ok": "854",
        "ko": "60003"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "28939",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "19307",
        "ok": "19300",
        "ko": "60003"
    },
    "standardDeviation": {
        "total": "6338",
        "ok": "6317",
        "ko": "0"
    },
    "percentiles1": {
        "total": "22177",
        "ok": "22176",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "23817",
        "ok": "23816",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "25188",
        "ok": "25188",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "26596",
        "ok": "26594",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5963,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "65.217",
        "ok": "65.207",
        "ko": "0.011"
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
