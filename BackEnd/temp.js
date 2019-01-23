'use strict'
var AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-south-1'
});
var dynamodb = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    endpoint: 'http://localhost:8001/shell/'
});
module.exports.getdata = (event, context, callback) => {
    var user_name = event.queryStringParameters.username;
    var pass_word = event.queryStringParameters.password;
    var params = {
        KeyConditionExpression: "username = :u",
        FilterExpression: "password = :p",
        ExpressionAttributeValues: {
            ":u": user_name,
            ":p": pass_word
        },
        TableName: "USERTABLE"
    };
    dynamodb.query(params, (err, data) => {
        if (err) console.log(err);
        else {
            console.log(JSON.stringify(data));
            var response = {
                statusCode: 200,
                body: JSON.stringify({
                    rec: 'Data Received Succesfully',
                    message: (data.Items)
                })
            }
            // details.push(data);
            // fs.writeFileSync("logindata.json", JSON.stringify(details));
            callback(null, response);
        }
    });

}