//Resource: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-document-client.html

// var AWS = require('aws-sdk');
// // Set the region 
// AWS.config.update({
//     region: 'ap-south-1'
// });

// // Create DynamoDB document client
// var docClient = new AWS.DynamoDB.DocumentClient({
//     apiVersion: '2012-08-10'
// });

var dbConfig = require('./BackEnd/dbConfig')
// ***********Getting an Item ***********************

// var params = {
//     TableName: 'userRecord',
//     Key: {
//         'emailId': 'test1@gmail.com',
//         'fName': 'testName'
//     }
// };

// dbConfig.docClient.get(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data.Item);
//     }
// });

// ***********Getting an Item ***********************

// ***********Putting an Item ***********************

// var params = {
//     TableName: 'userRecord',
//     Item: {
//         "emailId": "test2@gmail.com",
//         "fName": "testName2",
//         "password": "testPassword2",
//         "number": "testNumber2"
//     }
// };

// docClient.put(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data);
//     }
// });

// ***********Putting an Item ***********************