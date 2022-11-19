/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllObjects = /* GraphQL */ `
  query GetAllObjects($limit: Int, $nextToken: String) {
    getAllObjects(limit: $limit, nextToken: $nextToken) {
      items {
        ObjectId
        Version
        DetailType
        Source
        FilePath
        AccountId
        CreatedAt
        Region
        CurrentBucket
        OriginalBucket
        ObjectSize
        SourceIPAddress
        LifecycleConfig
      }
      nextToken
    }
  }
`;
export const getAllObjectsPaginated = /* GraphQL */ `
  query GetAllObjectsPaginated($limit: Int, $nextToken: String) {
    getAllObjectsPaginated(limit: $limit, nextToken: $nextToken) {
      items {
        ObjectId
        Version
        DetailType
        Source
        FilePath
        AccountId
        CreatedAt
        Region
        CurrentBucket
        OriginalBucket
        ObjectSize
        SourceIPAddress
        LifecycleConfig
      }
      nextToken
    }
  }
`;
export const getOneObject = /* GraphQL */ `
  query GetOneObject($ObjectId: String!) {
    getOneObject(ObjectId: $ObjectId) {
      ObjectId
      Version
      DetailType
      Source
      FilePath
      AccountId
      CreatedAt
      Region
      CurrentBucket
      OriginalBucket
      ObjectSize
      SourceIPAddress
      LifecycleConfig
    }
  }
`;
