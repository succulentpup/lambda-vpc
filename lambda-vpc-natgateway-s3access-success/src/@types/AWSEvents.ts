// tslint:disable:file-name-casing
import {
  ALBEvent,
  APIGatewayAuthorizerEvent,
  APIGatewayProxyEvent,
  CloudFormationCustomResourceEvent,
  CloudFrontRequestEvent,
  CloudFrontResponseEvent,
  CloudWatchLogsEvent,
  CodePipelineCloudWatchActionEvent,
  CodePipelineCloudWatchEvent,
  CodePipelineCloudWatchStageEvent,
  CodePipelineEvent,
  CognitoUserPoolTriggerEvent,
  DynamoDBStreamEvent,
  FirehoseTransformationEvent,
  KinesisStreamEvent,
  LexEvent,
  S3Event,
  ScheduledEvent,
  SNSEvent,
  SQSEvent,
} from 'aws-lambda';

export type AWSEvents =
  | ALBEvent
  | APIGatewayAuthorizerEvent
  | APIGatewayProxyEvent
  | CloudFormationCustomResourceEvent
  | CloudFrontRequestEvent
  | CloudFrontResponseEvent
  | CloudWatchLogsEvent
  | CodePipelineCloudWatchActionEvent
  | CodePipelineCloudWatchEvent
  | CodePipelineCloudWatchStageEvent
  | CodePipelineEvent
  | CognitoUserPoolTriggerEvent
  | DynamoDBStreamEvent
  | FirehoseTransformationEvent
  | KinesisStreamEvent
  | LexEvent
  | S3Event
  | ScheduledEvent
  | SNSEvent
  | SQSEvent;
