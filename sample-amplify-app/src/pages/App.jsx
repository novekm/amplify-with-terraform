/** **********************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using Cloudscape Design components. For production code, follow the
integration guidelines:

https://cloudscape.design/patterns/patterns/overview/
*********************************************************************** */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Routes, Link, useParams } from 'react-router-dom';

// - AMPLIFY -
import { Amplify } from 'aws-amplify';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyConfig } from '../config/amplify-config'; // NO TOUCHY
Amplify.configure(AmplifyConfig);

// - CORE COMPONENTS -
import TopNavigationHeader from '../common/components/TopNavigationHeader';

// - PAGES -
import Dashboard from './Dashboard';
import DataUploader from './DataUploader';
import S3Objects from './S3Objects';
import SingleS3Object from './SingleS3Object';
import GettingStarted from './GettingStarted';
import ErrorPage from './ErrorPage';
// Unused page imports
// import AccountSettings from './AccountSettings';


// - STYLES -
import '@cloudscape-design/global-styles/index.css';

// eslint-disable-next-line react/prop-types
const App = ({ signOut, user }) => {
  // State for current signed in user info
  const [userInfo, setUserInfo] = useState({
      username: '',
      given_name: '',
      family_name: '',
      email: '',
  })
  const getCurrentUserInfo = async ()=> {
    const attributes = await fetchUserAttributes();
    setUserInfo({
      username: attributes.username,
      given_name: attributes.given_name,
      family_name: attributes.family_name,
      email: attributes.email,
    })
  }
  useEffect(() => {
    getCurrentUserInfo();
  },[])

  // let { userId } = useParams();
  return (
    <>
        <TopNavigationHeader userInfo={userInfo}/>
      <Routes>
        <Route path="/" element={<Dashboard userInfo = {userInfo}  />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} />} />
        <Route path="/s3-objects" element={<S3Objects />} />
        <Route path="/s3-objects/:ObjectId" element={<SingleS3Object />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/data-uploader" element={<DataUploader />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

// export default App;
export default withAuthenticator(App);









