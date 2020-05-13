# aws-mercadolibre-webhooks-demo

This is a serverless demo app for processing  mercadolibre webhooks. 

It stores the information pushed from ML to a dynamoDB

# deploy 

make sure you have `serverless` installed and deploy

```
sls deploy
```

Once deployed the script will create a stack with:
 - API Gateway
 - Lambda function to get the request and store it in dynamo
 - DynamoDB Table
 

# configuration 

Once you deployed your app, copy the endpoint from the console
and configure your mercadolibre or mercadopago apps to push to the created endpoint.

Then you can watch in the dynamodb cretead table all the json messages coming from ML. 




