'use strict';

var AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
});

var dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.validateUser = async (event, context, callback) => {


    var em, pwd;
    em = event.queryStringParameters.email;
    pwd = event.queryStringParameters.password;

    console.log(em);
    console.log(pwd);

    var queryParams = {

        KeyConditionExpression: "emailId = :e",

        FilterExpression: "password = :p",
        ExpressionAttributeValues: {
            ":e": em,
            ":p": pwd
        },
        TableName: "userRecord"
    };

    // ***********Querying for an Item ***********************
    dynamoDb.query(queryParams, (err, data) => {
        //console.log(err);
        if (err) {
            console.log(err);
        } else {
            var userData = data.Items;
            var response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: (data.Items)
                })
            }
            callback(null, response);
        }
        // response.body = JSON.stringify(response.body);
    });
}