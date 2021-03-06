import Log from '@dazn/lambda-powertools-logger'; // it will be modified after integrating with lambda-powertools
import { S3Event } from 'aws-lambda';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import middy from '@middy/core';
import csv from 'csvtojson';
import { Response } from 'node-fetch';
import internal from 'stream';
import { incomingEventLogger, onErrorHandler } from '../helpers/middleware';

const { BUCKET: Bucket, REGION } = process.env;
const client = new S3Client( { region: REGION } );

export const index = async (event: S3Event) => {
    const s3GetObjectInput = {
        Bucket,
        Key: 'PublicCSVFiles/test.csv',  // hardcoded for the sake of example
    };
    const getObjectCommand = new GetObjectCommand(s3GetObjectInput);
    const { Body } = await client.send(getObjectCommand);
    const csvFileContentResponse = new Response(Body as internal.Readable);
    const csvFileContent = await csvFileContentResponse.text();
    Log.debug('csvFileContent', { csvFileContent });
    const jsonObj = await csv({ delimiter: ','})
        .fromString(csvFileContent);
    Log.debug('jsonObj', { jsonObj });
};

export const handler = middy(index);

handler.before(incomingEventLogger);
handler.onError(onErrorHandler);