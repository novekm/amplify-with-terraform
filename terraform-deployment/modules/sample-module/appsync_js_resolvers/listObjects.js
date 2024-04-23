// // Recommended approach to handle an object of values
// import { util } from '@aws-appsync/utils';
// export function request(ctx) {
//   return {
//     operation: 'Scan',
//     // filter: filter ? JSON.parse(util.transform.toDynamoDBFilterExpression(filter)) : null,
//     // limit: limit ?? 50,
//     // nextToken,
//   };
// }

// export function response(ctx) {
//   return ctx.result
// }

import * as ddb from '@aws-appsync/utils/dynamodb';

export function request(ctx) {
  const { limit = 1000, nextToken } = ctx.arguments;
  return ddb.scan({ limit, nextToken });
}

export function response(ctx) {
  const { items: objects = [], nextToken } = ctx.result;
  return { objects, nextToken };
}
