// import { util } from '@aws-appsync/utils';
// export function request(ctx) {
//   return {
//     operation: 'GetItem',
//     key: util.dynamodb.toMapValues({ DeviceId: ctx.args.DeviceId }),
//   };
// }

// export function response(ctx) {
//   return ctx.result
// }


import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx) {
	return ddb.get({ key: { ObjectId: ctx.args.ObjectId } })
}

export const response = (ctx) => ctx.result
