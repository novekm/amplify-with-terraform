/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import { applyMode, Mode } from "@cloudscape-design/global-styles";

// - AMPLIFY -
import { signOut} from 'aws-amplify/auth';

// - STYLES -
import '../../styles/top-navigation.scss';

// Company logo. Upload your own logo and point to it to change this in the TopNavigation.
import logo from '../../../public/images/AWS_logo_RGB_REV.png';


const TopNavigationHeader = ({ userInfo, user }) => {

    // Function to sign user out
  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const [darkMode, setDarkMode] = useState(false);
  const setDarkLightTheme = () => {
    if (darkMode) {
        localStorage.setItem('darkMode', false);
        applyMode(Mode.Light)
        setDarkMode(false)
    } else {
        localStorage.setItem('darkMode', true);
        applyMode(Mode.Dark)
        setDarkMode(true)
    }
  };

  useEffect(() => {
    setDarkMode(document.body.className === "awsui-dark-mode");
    const darkModePreference = localStorage.getItem('darkMode')
    if (darkModePreference === "true") {
        applyMode(Mode.Dark)
        setDarkMode(true)
    }
    else {
        applyMode(Mode.Light)
        setDarkMode(false)
    }

  }, []);

  return (
    <div id="h">
      <TopNavigation
        identity={{
          href: '/',
          // Your Company Name
          title: `Sample Amplify App`,
          logo: {
            src: logo,
            alt: 'Service',
          },
        }}
        utilities={[
          {
            type: 'button',
            text: 'AWS',
            href: 'https://aws.amazon.com/',
            external: true,
            externalIconAriaLabel: ' (opens in a new tab)',
          },
          {
            type: "button",
            variant: "primary",
            onClick: (() => setDarkLightTheme()),
            iconSvg: Mode.Dark ? <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.8166 9.79921C12.8417 9.75608 12.7942 9.70771 12.7497 9.73041C11.9008 10.164 10.9392 10.4085 9.92054 10.4085C6.48046 10.4085 3.69172 7.61979 3.69172 4.17971C3.69172 3.16099 3.93628 2.19938 4.36989 1.3504C4.39259 1.30596 4.34423 1.25842 4.3011 1.28351C2.44675 2.36242 1.2002 4.37123 1.2002 6.67119C1.2002 10.1113 3.98893 12.9 7.42901 12.9C9.72893 12.9 11.7377 11.6535 12.8166 9.79921Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    className="filled"
                />
            </svg> : <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.8166 9.79921C12.8417 9.75608 12.7942 9.70771 12.7497 9.73041C11.9008 10.164 10.9392 10.4085 9.92054 10.4085C6.48046 10.4085 3.69172 7.61979 3.69172 4.17971C3.69172 3.16099 3.93628 2.19938 4.36989 1.3504C4.39259 1.30596 4.34423 1.25842 4.3011 1.28351C2.44675 2.36242 1.2002 4.37123 1.2002 6.67119C1.2002 10.1113 3.98893 12.9 7.42901 12.9C9.72893 12.9 11.7377 11.6535 12.8166 9.79921Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    className="filled"
                />
            </svg>,
            text: darkMode ? "   Light Mode" : "   Dark Mode",
            title: darkMode ? "   Light Mode" : "   Dark Mode",
          },
          {
            type: 'button',
            iconName: 'notification',
            title: 'Notifications',
            ariaLabel: 'Notifications (unread)',
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: 'menu-dropdown',
            iconName: 'settings',
            ariaLabel: 'Settings',
            title: 'Settings',
            items: [
              {
                id: 'settings-org',
                text: 'Organizational settings',
              },
              {
                id: 'settings-project',
                text: 'Project settings',
              },
            ],
          },
          {
            type: 'menu-dropdown',
            text: `${userInfo.given_name} ${userInfo.family_name}`,
            description: `${userInfo.email}`,
            iconName: 'user-profile',
            items: [
              { id: 'profile', text: 'Profile' },
              // Use me once a user profile page is created
              // { id: "profile", text: "Profile", href : '/user-profile'},
              { id: 'preferences', text: 'Preferences' },
              { id: 'security', text: 'Security' },
              {
                id: 'support-group',
                text: 'Support',
                items: [
                  {
                    id: 'documentation',
                    text: 'Documentation',
                    // TODO - Replace this with link to our Workshop URL
                    href: 'https://workshops.aws/',
                    external: true,
                    externalIconAriaLabel: ' (opens in new tab)',
                  },
                  { id: 'support', text: 'Support' },
                  {
                    id: 'feedback',
                    text: 'Feedback',
                    // TODO - Replace this with link to our GitHub feedback mechanism
                    href: 'https://github.com/novekm/iot-puppy-park',
                    external: true,
                    externalIconAriaLabel: ' (opens in new tab)',
                  },
                ],
              },
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              { id: 'signout', text: <span onClick={handleSignOut}>Sign out </span> },
            ],
          },
        ]}
        i18nStrings={{
          // searchIconAriaLabel: "Search",
          // searchDismissIconAriaLabel: "Close search",
          overflowMenuTriggerText: 'More',
          // overflowMenuTitleText: "All",
          // overflowMenuBackIconAriaLabel: "Back",
          // overflowMenuDismissIconAriaLabel: "Close menu"
        }}
      />
    </div>
  );
};

export default TopNavigationHeader;
