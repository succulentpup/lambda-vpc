import Log from '@dazn/lambda-powertools-logger'; // it will be modified after integrating with lambda-powertools
import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '@middy/core';
import cors from '@middy/http-cors';
import validator from '@middy/validator';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpSecurityHeaders from '@middy/http-security-headers';
import status from 'statuses';
import { incomingEventLogger, onErrorHandler } from './helpers/middleware';

const WHITE_SPACES = 2;
export const health: APIGatewayProxyHandler = async (event) => {
  Log.info('Add your implementation here');
  await Promise.resolve();
  return {
    statusCode: status('OK') as number,
    body: JSON.stringify(
      {
        message: 'Go Serverless, Your function executed successfully!',
        input: event,
      },
      null,
      WHITE_SPACES,
    ),
  };
};

// -----------------------------------------------------------------------------------//
// ----------------------------Middy middleware---------------------------------------//
// -----------------------------------------------------------------------------------//

const inputSchema = {
  type: 'object',
  properties: {
    pathParameters: {
      type: ['object', 'null'],
      properties: {
        uid: { type: 'number' },
      },
      // required: ['uid'], // Insert here all required pathParameters
    },
  },
};

export const handler = middy(health)
// eslint-disable-next-line max-len
  .use(httpEventNormalizer()) // Normalizes HTTP events by adding an empty object for queryStringParameters and pathParameters if they are missing.
  .use(httpHeaderNormalizer()) // Normalizes HTTP header names to their canonical format.
  .use(validator({ inputSchema })) // validates the input
  .use(cors())
  .use(httpSecurityHeaders());

handler.before(incomingEventLogger);
handler.onError(onErrorHandler);
