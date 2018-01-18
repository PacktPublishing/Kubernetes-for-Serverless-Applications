'use strict';

let https = require('https');

const slackWebhookPath = "/put/your/url/here"; // Something like "/services/XXX/YYY/zZz123"

function upcaseFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

async function sendSlackMessage(msg) {
    let postData = `{"text": "${msg}"}`;
    let options = {
        hostname: "hooks.slack.com",
        path: slackWebhookPath,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    return new Promise(function(resolve, reject) {
        let req = https.request(options, function(res) {
            console.log(`slack request status = ${res.statusCode}`);
            return resolve();
        });
        req.write(postData);
        req.end();
    });
}

module.exports = async function(context) {
    console.log(context.request.headers);

    let obj = context.request.body;
    let version = obj.metadata.resourceVersion;
    let eventType = context.request.get('X-Kubernetes-Event-Type');
    let objType = context.request.get('X-Kubernetes-Object-Type');

    let msg = `${upcaseFirst(eventType)} ${objType} ${obj.metadata.name}`;
    console.log(msg, version);

    if (eventType == 'DELETED' || eventType == 'ADDED') {
        console.log("sending event to slack")
        await sendSlackMessage(msg);
    }

    return {
        status: 200,
        body: ""
    }
}
