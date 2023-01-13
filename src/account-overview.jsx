import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faInfoCircle,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import "./account-overview.css";
import { getPercent, makeSupportAccount } from "./use-case/account-overview";

import {
  Container,
  FeedBackContainer,
  Header,
  PercentStatus,
  SupportContactContainer,
} from "./account-overview.styled";

export const AccountOverview = ({ data }) => {
  const { salesOverview, supportContact: supportContactData } = data;

  const supportEmail = supportContactData.email;
  const supportName = supportContactData.name;
  const supportAvatar = "S";
  const supportNumber = supportContactData.number;
  const supportContact = makeSupportAccount(supportEmail, supportNumber);

  return (
    <Container id="account-overview-container">
      <Header id="account-overview-header">
        <h5 className="title">Account Overview</h5>

        <SupportContactContainer id="support-contact-container">
          <h5 className="title">YOUR FEEFO SUPPORT ACCOUNT</h5>
          <div className="body">
            <span className="avatar">{supportAvatar}</span>
            <div className="footer">
              <span className="name">{supportName}</span>

              <span className="contact">
                <FontAwesomeIcon color="darkgray" icon={faEnvelope} />
                <span>{supportContact}</span>
              </span>
            </div>
          </div>
        </SupportContactContainer>
      </Header>
      <FeedBackContainer id="feedback-container">
        <div className="header">
          <div className="title">
            <FontAwesomeIcon color="deepskyblue" icon={faUpload} />
            <h4>Sales</h4>
          </div>
          <FontAwesomeIcon color="darkgray" icon={faInfoCircle} />
        </div>

        <div className="body">
          <p className="description">
            You had <strong>{salesOverview.successfulUploads} uploads </strong>
            and <strong>{salesOverview.linesSaved}</strong> lines added
          </p>
        </div>

        <div className="footer">
          <PercentStatus id="successfull-uploads">
            <h4 className="title">
              {getPercent(
                salesOverview.successfulUploads,
                salesOverview.uploads
              )}
              %
            </h4>
            <h4 className="label">Upload success</h4>
          </PercentStatus>
          <PercentStatus id="saved-lines">
            <h4 className="title">
              {getPercent(
                salesOverview.linesSaved,
                salesOverview.linesAttempted
              )}
              %
            </h4>
            <h4 className="label">Lines added</h4>
          </PercentStatus>
        </div>
      </FeedBackContainer>
    </Container>
  );
};

export default AccountOverview;
