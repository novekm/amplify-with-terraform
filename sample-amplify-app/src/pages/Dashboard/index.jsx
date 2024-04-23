/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/** **********************************************************************
                            DISCLAIMER
This is just a playground package. It does not comply with best practices
of using Cloudscape Design components. For production code, follow the
integration guidelines:
https://cloudscape.design/patterns/patterns/overview/
*********************************************************************** */
import React, { useState, useEffect } from 'react';
// - CLOUDSCAPE -
import {
  // Alert,
  BreadcrumbGroup,
  Button,
  // Flashbar,
  AppLayout,
  Container,
  Header,
  HelpPanel,
  Grid,
  Box,
  Icon,
  TextContent,
  ContentLayout,
  SpaceBetween,
} from '@cloudscape-design/components';
// - COMMON -
import {
  // Notifications,
  ExternalLinkItem,
  // TableHeader,
} from '../../common/common-components-config';
import Sidebar from '../../common/components/Sidebar';
import { resourcesBreadcrumbs } from './breadcrumbs';
// - CORE COMPONENTS -
import { S3ObjectsOverview } from './S3ObjectsOverview';
import { EmissionsLineChart } from './S3ObjectsLineChart';
import { EmissionsBarChart } from './S3ObjectsBarChart';

// - STYLES -
// import '../../common/styles/dashboard.scss';
import '../../common/styles/intro.scss';
import '../../common/styles/servicehomepage.scss';
// - ASSETS -
import awsLogo from '../../public/images/AWS_logo_RGB_REV.png';
// - AMPLIFY -
import { Amplify } from 'aws-amplify';

import { generateClient } from 'aws-amplify/api'
import { withAuthenticator } from '@aws-amplify/ui-react';

// - API FUNCTIONS -
import * as queries from '../../graphql/queries';


const Dashboard = ({ user, userAttributes, userInfo }) => {
  return (
    <AppLayout
      breadcrumbs={<Breadcrumbs />}
      navigation={<Sidebar activeHref="/dashboard" />}
      content={
        // <ContentLayout header={<DashboardHeader />}>
        //   <Content />
        // </ContentLayout>
        <Content userInfo={userInfo} userAttributes={userAttributes} user={user} />
      }
      tools={<ToolsContent />}
      headerSelector="#h"
      disableContentPaddings
    />
  );
};

export default withAuthenticator(Dashboard);

const Content = ({ userInfo, user, isInProgress }) => {
  const [s3Objects, setS3Objects] = useState([]);

  useEffect(() => {
    fetchS3Objects();
  }, []);

  // Instantiate GraphQL client
  const client = generateClient()

  // Fetch all S3 Objects in the Output DynamoDB Table
    const fetchS3Objects = async () => {
    try {
      const s3ObjectData = await client.graphql({
        query: queries.listObjects,
        variables: { limit:10000 }
      });
      const s3ObjectsDataList = s3ObjectData.data.listObjects.objects;
      console.log('S3 Object List', s3ObjectsDataList);
      setS3Objects(s3ObjectsDataList);
    } catch (error) {
      console.log('error on fetching s3 objects', error);
    }
  };


  // 1. Map through existing 's3ObjectDataList' array and create new array with date properties for filtering
  const dateSeparatedS3Objects = s3Objects.map((s3Object) => ({
    ObjectId: s3Object.ObjectId,
    Version: s3Object.Version,
    DetailType: s3Object.DetailType,
    Source: s3Object.Source,
    FileName: s3Object.FileName,
    FilePath: s3Object.FilePath,
    AccountId: s3Object.AccountId,
    CreatedAt: s3Object.CreatedAt,
    Region: s3Object.Region,
    CurrentBucket: s3Object.CurrentBucket,
    OriginalBucket: s3Object.OriginalBucket,
    ObjectSize: s3Object.ObjectSize,
    SourceIPAddress: s3Object.SourceIPAddress,
    LifecycleConfig: s3Object.LifecycleConfig,

    // emissions_output: JSON.parse(emission.emissions_output),
    year: new Date(s3Object.CreatedAt).getFullYear(),
    month: new Date(s3Object.CreatedAt).getMonth() + 1,
    day: new Date(s3Object.CreatedAt).getDate(),
    // time: new Date(s3Object.CreatedAt).getTime(),
  }));
  console.log('Date Separated S3 Objects', dateSeparatedS3Objects);

  // 2. Map through 'dateSeparatedS3Objects' array and create new array with 's3Objects' filtered by month for 2022
  const filteredS3Objects2022 = {
    // - JANUARY -
    jan: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 1)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - FEBRUARY -
    feb: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 2)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - MARCH -
    march: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 3)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - APRIL -
    april: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 4)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - MAY -
    may: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 5)
        .map((s3Object) => s3Object.ObjectSize),
    },
    // - JUNE -
    june: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 6)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - JULY -
    july: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 7)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - AUGUST -
    aug: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 8)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - SEPTEMBER -
    sept: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 9)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - OCTOBER -
    oct: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 10)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - NOVEMBER -
    nov: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 11)
        .map((s3Object) => s3Object.ObjectSize),
    },

    // - DEC -
    dec: {
      // dataSize (Object size in bytes)
      dataSize: dateSeparatedS3Objects
        .filter((s3Object) => s3Object.month === 12)
        .map((s3Object) => s3Object.ObjectSize),
    },
  };
  console.log('filteredS3Object2022', filteredS3Objects2022);

  // 3. Take the sum of each emission for each month in 2020 and assign those items to new object
  const filteredS3ObjectsTotal2022 = {
    // - January -
    jan: {
      dataSize: parseFloat(
        filteredS3Objects2022.jan.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.jan.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.jan.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - February -
    feb: {
      dataSize: parseFloat(
        filteredS3Objects2022.feb.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.feb.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.feb.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - March -
    march: {
      dataSize: parseFloat(
        filteredS3Objects2022.march.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.march.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.march.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - April -
    april: {
      dataSize: parseFloat(
        filteredS3Objects2022.april.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.april.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.april.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - May -
    may: {
      dataSize: parseFloat(
        filteredS3Objects2022.may.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.may.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.may.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - June -
    june: {
      dataSize: parseFloat(
        filteredS3Objects2022.june.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.june.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.june.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - July -
    july: {
      dataSize: parseFloat(
        filteredS3Objects2022.july.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.july.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.july.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - August -
    aug: {
      dataSize: parseFloat(
        filteredS3Objects2022.aug.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.aug.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.aug.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - September -
    sept: {
      dataSize: parseFloat(
        filteredS3Objects2022.sept.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.sept.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.sept.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - October -
    oct: {
      dataSize: parseFloat(
        filteredS3Objects2022.oct.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.oct.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.oct.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - November -
    nov: {
      dataSize: parseFloat(
        filteredS3Objects2022.nov.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.nov.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.nov.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },

    // - December -
    dec: {
      dataSize: parseFloat(
        filteredS3Objects2022.dec.dataSize
          .reduce((total, value) => total + value, 0)
          .toFixed(2)
      ),
      dataSizeMB: parseFloat(
        parseFloat(
          filteredS3Objects2022.dec.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000
        ).toFixed(2)
      ),
      dataSizeGB: parseFloat(
        parseFloat(
          filteredS3Objects2022.dec.dataSize
            .reduce((total, value) => total + value, 0)
            .toFixed(2) / 1000000000
        ).toFixed(2)
      ),
    },
  };
  console.log('filteredS3ObjectsTotal2022', filteredS3ObjectsTotal2022);
  const filteredS3ObjectsTotalSumGB2022 =
    filteredS3ObjectsTotal2022.jan.dataSizeGB +
    filteredS3ObjectsTotal2022.feb.dataSizeGB +
    filteredS3ObjectsTotal2022.march.dataSizeGB +
    filteredS3ObjectsTotal2022.april.dataSizeGB +
    filteredS3ObjectsTotal2022.may.dataSizeGB +
    filteredS3ObjectsTotal2022.june.dataSizeGB +
    filteredS3ObjectsTotal2022.july.dataSizeGB +
    filteredS3ObjectsTotal2022.aug.dataSizeGB +
    filteredS3ObjectsTotal2022.sept.dataSizeGB +
    filteredS3ObjectsTotal2022.oct.dataSizeGB +
    filteredS3ObjectsTotal2022.nov.dataSizeGB +
    filteredS3ObjectsTotal2022.dec.dataSizeGB;
  console.log(
    'filteredS3ObjectsTotalSumGB2022',
    filteredS3ObjectsTotalSumGB2022
  );


  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <>
      {/* <Grid
        gridDefinition={[
          { colspan: { l: 8, m: 8, default: 12 } },
          { colspan: { l: 4, m: 4, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 6, m: 6, default: 12 } },
          { colspan: { l: 8, m: 8, default: 12 } },
          { colspan: { l: 4, m: 4, default: 12 } },
        ]}
      >
        <ServiceOverview />
        <ServiceHealth loadHelpPanelContent={props.loadHelpPanelContent} />
      <CPUUtilisation />
      <NetworkTraffic />
      <Alarms />
      <InstancesLimits />
      <Events />
      <ZoneStatus />
      <FeaturesSpotlight />
    <AccountAttributes />
      </Grid> */}
      {/* <h1>Dashboard</h1> */}

      {/* <ServiceOverview /> */}
      <TextContent>
        <div>
          <Grid className="custom-home__header" disableGutters>
            <Box margin="xxl" padding={{ vertical: '', horizontal: 'l' }}>
              <Box margin={{ bottom: 's' }} />
              <img
                src={awsLogo}
                alt=""
                style={{ maxWidth: '10%', paddingRight: '2em' }}
                // style={{ maxWidth: '20%', paddingRight: '2em' }}
              />
              <div className="custom-home__header-title">
                <Box fontSize="display-l" fontWeight="bold" color="inherit">
                  Hello, {userInfo.given_name} 👋
                </Box>
                <Box
                  fontSize="heading-l"
                  padding={{ bottom: 's' }}
                  fontWeight="light"
                  color="inherit"
                >
                  Ready to get the day started?
                </Box>
              </div>
            </Box>
          </Grid>
        </div>
      </TextContent>
      <S3ObjectsOverview
        s3Objects={s3Objects}
        s3ObjectSizeSum={filteredS3ObjectsTotalSumGB2022}
      />
      <EmissionsBarChart s3ObjectsMonthlyTotal={filteredS3ObjectsTotal2022} />
      <EmissionsLineChart />
    </>
  );
};

export const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={resourcesBreadcrumbs}
    expandAriaLabel="Show path"
    ariaLabel="Breadcrumbs"
  />
);

export const ToolsContent = () => (
  <HelpPanel
    header={<h2>Dashboard</h2>}
    footer={
      <>
        <h3>
          Learn more{' '}
          <span role="img" aria-label="Icon external Link">
            <Icon name="external" />
          </span>
        </h3>
        <ul>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/energy/"
              text="AWS Energy & Utilities"
            />
          </li>
          {/* <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/energy/"
              text="TBD - Full Stack React Web Apps Blog Post"
            />
          </li> */}
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/transcribe/call-analytics/"
              text="Amazon Transcribe Call Analytics Service Page"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/transcribe/faqs/?nc=sn&loc=5"
              text="Amazon Transcribe FAQs"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html"
              text="Amazon Transcribe Custom Language Models"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html"
              text="Amazon Transcribe Custom Vocabularies"
            />
          </li>
        </ul>
      </>
    }
  >
    <p>
      The dashboard page serves as your single pane of glass into your relevant
      data points.
    </p>
  </HelpPanel>
);
