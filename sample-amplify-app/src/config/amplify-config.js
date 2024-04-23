/* eslint-disable import/no-extraneous-dependencies */
// -- AWS AMPLIFY CONFIGURATION PARAMETERS --
import { Amplify } from 'aws-amplify';

// eslint-disable-next-line import/no-unresolved
// Uncomment this to test env vars
// console.log('env', import.meta.env);
// console.log('userpoolid',import.meta.env.VITE_USER_POOL_ID)
const AmplifyConfig = {
  // Existing API
  API: {
    GraphQL:{
      endpoint: `${import.meta.env.VITE_GRAPHQL_URL}`,
      region: `${import.meta.env.VITE_REGION}`,
      defaultAuthMode: 'userPool', // No touchy
    }
  },
  // Existing Auth
  Auth: {
    Cognito: {
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: import.meta.env.VITE_APP_CLIENT_ID,
      //  Amazon Cognito User Pool ID
      userPoolId: `${import.meta.env.VITE_USER_POOL_ID}`,
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: `${import.meta.env.VITE_IDENTITY_POOL_ID}`,
      // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
      allowGuestAccess: false,
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: 'code', // 'code' | 'link'
      loginWith: { // Optional
        // oauth: {
        //   domain: 'abcdefghij1234567890-29051e27.auth.us-east-1.amazoncognito.com',
        //   scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
        //   redirectSignIn: ['http://localhost:3000/','https://example.com/'],
        //   redirectSignOut: ['http://localhost:3000/','https://example.com/'],
        //   responseType: 'code',
        // },
        username: 'true',
        email: 'true', // Optional
        phone: 'false', // Optional
      }
    }
  },
  Storage: {
    S3: {
      region: import.meta.env.VITE_REGION, // Required -  Amazon service region
      bucket: import.meta.env.VITE_LANDING_BUCKET, // REQUIRED -  Amazon S3 bucket name
    },
  },
};
export { AmplifyConfig };


