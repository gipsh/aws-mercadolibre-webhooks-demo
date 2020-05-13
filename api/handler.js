'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

AWS.config.setPromisesDependency(require('bluebird'));

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.submit = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);


    submitEventP(eventInfo(event.body))
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Sucessfully submitted event`,
          eventId: res.id
        })
      });
    })
    .catch(err => {
      console.log(err);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: `Unable to submit event`
        })
      })
    });
};

  const submitEventP = ml_event => {
    console.log('Submitting event');
    const eventInfo = {
      TableName: process.env.EVENT_TABLE,
      Item: ml_event,
    };
    return dynamoDb.put(eventInfo).promise()
    .then(res => ml_event);
  };

  const eventInfo = (body) => {
    const timestamp = new Date().getTime();
    return {
      id: uuid.v1(),
      raw: body,
      submittedAt: timestamp,
      updatedAt: timestamp,
    };

  };

