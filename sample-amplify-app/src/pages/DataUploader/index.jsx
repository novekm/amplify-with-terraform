/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/order */
/** **********************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using Cloudscape Design components. For production code, follow the
integration guidelines:

https://cloudscape.design/patterns/patterns/overview/
*********************************************************************** */

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppLayout,
  Container,
  Header,
  HelpPanel,
  Grid,
  Box,
  TextContent,
  SpaceBetween,
  Flashbar,
  Alert,
  Form,
  Button,
  Table,
  Icon,
  ProgressBar,
} from '@cloudscape-design/components';
import Sidebar from '../../common/components/Sidebar';

import { ExternalLinkItem } from '../../common/common-components-config';

import '../../common/styles/intro.scss';
import '../../common/styles/servicehomepage.scss';

import { COLUMN_DEFINITIONS } from './TableConfig';

// - AMPLIFY -
import { uploadData } from 'aws-amplify/storage';

// Image imports
import awsLogo from '../../public/images/AWS_logo_RGB_REV.png';

const DataUploader = () => {
  return (
    <>
      <AppLayout
        navigation={<Sidebar activeHref="#/" />}
        // navigation={<Sidebar activeHref="#/" items={navItems}/>}
        content={<Content />}
        tools={<ToolsContent />}
        headerSelector="#h"
        disableContentPaddings
        // toolsHide={true}
      />
    </>
  );
};

export default DataUploader;

const Content = () => {
  const [data, setData] = useState([]);
  const [files, setFiles] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [remove, setRemove] = useState(false);
  const fileInput = useRef();

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(true);

  const [alertType, setAlertType] = useState('');
  const [alertContent, setAlertContent] = useState('');

  const [filePercentUploaded, setFilePercentUploaded] = useState(null);
  const [fileName, setFileName] = useState(null);
  // const [fileDescription, setFileDescription] = useState(null);
  // const [fileType, setFileType] = useState(null);
  // const [fileInfo, setFileInfo] = useState(null);

  // const [fileUploadStatus, setFileUploadStatus] = useState('-');
  // const [fileUploadErrorMessage, setFileUploadErrorMessage] = useState('-');

  const [showUploadingFlashbar, setShowUploadingFlashbar] = useState(false);
  const [showSuccessFlashbar, setShowSuccessFlashbar] = useState(false);
  const [showErrorFlashbar, setShowErrorFlashbar] = useState(false);
  const [flashbarItems, setFlashbarItems] = useState([]);

  const [disableCancelButton, setDisableCancelButton] = useState(true);
  const [disableUploadButton, setDisableUploadButton] = useState(true);
  const [disableRemoveButton, setDisableRemoveButton] = useState(true);
  const [disableAddFileButton, setDisableAddFileButton] = useState(false);

  const selectFile = () => {
    fileInput.current.click();
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setFiles(e.target.files[0]);
    setData([
      {
        name: e.target.files[0].name,
        type: e.target.files[0].type,
        // size: `${Math.ceil(e.target.files[0].size / 1000000)} MB`
        // Convert bytes to MB and round to nearest hundredth (2 decimal places)
        size: `${(e.target.files[0].size / 1000000).toFixed(2)} MB`,
        // status: fileUploadStatus,
        // error: fileUploadErrorMessage,
      },
    ]);
    setRemove(true);
    e.target.value = null;
    // setShowUploadingFlashbar(false)
    setShowSuccessFlashbar(false);
    setShowErrorFlashbar(false);
    setDisableCancelButton(false);
    setDisableUploadButton(false);
    setDisableRemoveButton(false);
  };

  const removeButton = () => {
    setData([]);
    setRemove(false);
    setShowErrorFlashbar(false);
    setDisableRemoveButton(true);
    setDisableCancelButton(true);
    setDisableUploadButton(true);
  };

  const cancelFileUpload = () => {
    setFiles(null);
    setData([]);
    setRemove(false);
    setVisibleAlert(false);

    setShowUploadingFlashbar(false);
    setShowSuccessFlashbar(false);
    setShowErrorFlashbar(false);
    setDisableRemoveButton(true);
    setDisableCancelButton(true);
    setDisableUploadButton(true);
  };

  const navigate = useNavigate();

  const uploadFile = async () => {
    setShowUploadingFlashbar(true);
    setShowSuccessFlashbar(false);
    setShowErrorFlashbar(false);
    setDisableCancelButton(true);
    setDisableUploadButton(true);
    setDisableRemoveButton(true);
    setDisableAddFileButton(true);

    try {
      // setAlertType('success');
      // setAlertContent('File was uploaded successfully');

      const result = await uploadData({
          // key: filename,
          // data: file,
          key: `input/${files.name}`,
          data: files,
          contentType: files.type,
          options: {
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                console.log('Uploading file to S3 Bucket ...');
                console.log(
                  `Upload progress ${
                    Math.round((transferredBytes / totalBytes) * 100)
                  } %`
                  );
                  const percent_uploaded = Math.round((transferredBytes / totalBytes) * 100);

                setFilePercentUploaded(percent_uploaded);
                setFileName(files.name);
                setFlashbarItems([
                  {
                    type: 'success',
                    content: `File: ${files.name} has been successfully uploaded.`,
                    action: (
                      <Button onClick={() => navigate('/s3-objects')}>
                        View S3 Objects
                      </Button>
                    ),
                    dismissible: true,
                    dismissLabel: 'Dismiss message',
                    // onDismiss: () => {setItems([]); setShowSuccessFlashbar(false)},
                    onDismiss: () => setShowSuccessFlashbar(false),
                    id: 'success_message_1',
                  },
                ]);
              }
            }
          }
        }).result;

        console.log('Key from Response: ', result.key);

        setShowSuccessFlashbar(true); // show success flashbar when file upload is successfully completed
        setShowUploadingFlashbar(false); // hide uploading flashbar when file upload is successfully completed
        setDisableCancelButton(false); // allow cancel button to work again when file upload is successfully completed
        setData([]);
        setDisableCancelButton(true);
        setDisableAddFileButton(false);
        setFilePercentUploaded(0); // reset file upload state back to 0
      } catch (error) {

      console.log('Error uploading file:', error);

      setFlashbarItems([
        {
          type: 'error',
          content: `Error 403: File could not be uploaded. Ensure you have the necessary permissions and try again.`,
          // content: `Error 403: File could not be uploaded. Ensure you have the necessary permissions and try again.,${err}`,
          action: <Button onClick={uploadFile}>Try again</Button>,
          dismissible: true,
          dismissLabel: 'Dismiss message',
          onDismiss: () => setShowErrorFlashbar(false),
          id: 'error_message_1',
        },
      ]);
      setShowUploadingFlashbar(false); // hide uploading flashbar if error occurs
      setShowErrorFlashbar(true); // show error message if file cannot be uploaded successfully
      setDisableCancelButton(false); // allow cancel button to work again if file cannot be uploaded successfully
      setDisableAddFileButton(false);
      setDisableRemoveButton(false);
    }
  };

  return (
    <div>
      <TextContent>
        <div>
          <Grid className="custom-home__header" disableGutters>
            <Box margin="xxl" padding={{ vertical: 'xl', horizontal: 'l' }}>
              <Box margin={{ bottom: 's' }}>
                <img
                  src={awsLogo}
                  alt=""
                  style={{ maxWidth: '20%', paddingRight: '2em' }}
                />
              </Box>
              <div className="custom-home__header-title">
                <Box fontSize="display-l" fontWeight="bold" color="inherit">
                  GISA
                </Box>
                <Box
                  fontSize="display-l"
                  padding={{ bottom: 's' }}
                  fontWeight="light"
                  color="inherit"
                >
                  Data Uploader
                </Box>
                <Box fontWeight="light">
                  <span className="custom-home__header-sub-title">
                    Upload your files below to start the pipeline.
                  </span>
                </Box>
              </div>
            </Box>
          </Grid>
        </div>
        {/* Start How it works section */}
        <Box margin="xxl" padding="l">
          <SpaceBetween size="l">
            {visibleInfo && (
              <Flashbar
                items={[
                  {
                    type: 'info',
                    dismissible: true,
                    onDismiss: () => setVisibleInfo(false),
                    content: (
                      <>
                        We currently support single file upload. Multi-file
                        upload is coming in future releases. Please upload one
                        file at a time.
                        {/* <br />
                    <br />
                    For more information, see the
                    {" "}
                    link
                    <Link color="inverted">
                      a link to another page
                    </Link>
                    . */}
                      </>
                    ),
                    id: 'info_message_1',
                  },
                ]}
              />
            )}

            {/* <Alert
            onDismiss={() => setVisibleInfo(false)}
            dismissible = "true"
            visible={visibleInfo}
            dismissAriaLabel="Close alert"
            header="File Upload Guidance"
          >
             We currently support single file upload. Multi-file upload is coming in future releases. Please upload one file at a time.
          </Alert> */}
            <div>
              {/* Show uploading flashbar if showUploadingFlashbar is true (if upload is in progress) */}
              {showUploadingFlashbar && (
                <Flashbar
                  items={[
                    {
                      loading: true,
                      type: 'info',
                      content: (
                        <ProgressBar
                          value={filePercentUploaded}
                          variant="flash"
                          // additionalInfo="Transfer Rate:" // TODO - add calculation for transfer rate
                          description={fileName}
                          label="Uploading..."
                        />
                      ),
                      id: 'progressbar_1',
                    },
                  ]}
                />
              )}

              {/* Show success flashbar if showSuccessFlashbar is true (if upload is successful) */}
              {showSuccessFlashbar && <Flashbar items={flashbarItems} />}

              {/* Show error flashbar if showErrorFlashbar is true (if upload is unsuccessful) */}
              {showErrorFlashbar && <Flashbar items={flashbarItems} />}

              <form onSubmit={(e) => e.preventDefault()}>
                <Alert
                  onDismiss={() => setVisibleAlert(false)}
                  visible={visibleAlert}
                  dismissAriaLabel="Close alert"
                  dismissible
                  type={alertType}
                >
                  {alertContent}
                </Alert>

                <Form
                  actions={
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button
                        disabled={disableCancelButton}
                        formAction="none"
                        variant="link"
                        onClick={cancelFileUpload}
                      >
                        Cancel
                      </Button>
                      <Button
                        disabled={disableUploadButton}
                        onClick={uploadFile}
                        variant="primary"
                      >
                        Upload
                      </Button>
                    </SpaceBetween>
                  }
                  header={
                    <Header
                      variant="h1"
                      description="Add the file you want to upload to S3. To upload a file larger than 160GB, use the AWS CLI, AWS SDK or Amazon S3 REST API."
                    >
                      Upload
                    </Header>
                  }
                >
                  <Container
                    header={
                      <Header
                        variant="h2"
                        actions={
                          <SpaceBetween direction="horizontal" size="s">
                            <Button
                              onClick={removeButton}
                              disabled={disableRemoveButton}
                            >
                              {' '}
                              Remove{' '}
                            </Button>
                            <input
                              type="file"
                              accept=".csv,.json,.xml,.txt,.amr,.flac,.mp3,.mp4,.ogg,.webm,.wav"
                              id="grid-interconnect-file"
                              hidden="hidden"
                              style={{ display: 'none' }}
                              ref={fileInput}
                              onChange={handleFileInput}
                            />
                            <Button
                              disabled={disableAddFileButton}
                              iconName="file"
                              id="grid-interconnect-button"
                              onClick={selectFile}
                            >
                              {' '}
                              Add File{' '}
                            </Button>
                          </SpaceBetween>
                        }
                      >
                        File
                      </Header>
                    }
                  >
                    <Table
                      columnDefinitions={COLUMN_DEFINITIONS}
                      items={data}
                      sortingDisabled
                      empty={
                        <Box textAlign="center" color="inherit">
                          <b>No files</b>
                          <Box
                            padding={{ bottom: 's' }}
                            variant="p"
                            color="inherit"
                          >
                            You have not chosen any files to upload.
                          </Box>
                        </Box>
                      }
                    />
                  </Container>
                </Form>
              </form>
            </div>
          </SpaceBetween>
        </Box>
      </TextContent>
    </div>
  );
};
export const ToolsContent = () => (
  <HelpPanel
    header={<h2>Data Uploader</h2>}
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
          <li>
            <ExternalLinkItem
              href="https://aws.amazon.com/s3/"
              text="Amazon S3"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://github.com/novekm/iot-puppy-park"
              text="IoT Puppy Park GitHub Repo"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://www.petoi.com/pages/bittle-open-source-bionic-robot-dog"
              text="Petoi Bittle"
            />
          </li>
          <li>
            <ExternalLinkItem
              href="https://www.petoi.camp/forum/"
              text="Petoi Forum"
            />
          </li>
        </ul>
      </>
    }
  >
    <p>
      Select 'Add file' to upload your data. To upload a file larger than 160GB,
      use the AWS CLI, AWS SDK or Amazon S3 REST API.
    </p>
  </HelpPanel>
);
