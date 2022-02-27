import Log from '@dazn/lambda-powertools-logger';
import middy from '@middy/core';

import {AWSEvents} from '../../@types/AWSEvents';

export const incomingEventLogger: middy.MiddlewareFn<AWSEvents> = async (request) => {
    Log.info('Incoming Event: ', { ...request.event });

    // Continue chain (return undefined)
    return undefined;
};