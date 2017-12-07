/**
 * Static implementation of Resources page for Cognitive Community
 */

import JoinCommunity from 'containers/tc-communities/JoinCommunity';
import PT from 'prop-types';
import React from 'react';

import joinImage from
  'assets/images/communities/cognitive/resources/join-image.jpg';

import standardPrimaryButtonTheme from
  'components/buttons/standard/primary.scss';

import IbmLogoSvg from
  'assets/images/communities/cognitive/resources/ibm-logo.svg';
import LaptopSvg from
  'assets/images/communities/cognitive/resources/laptop.svg';
import MsgsSvg from
  'assets/images/communities/cognitive/resources/msgs.svg';

import { Button } from 'components/buttons';

import FaqItem from './FaqItem';
import NewsSignup from '../NewsSignup';

import style from './style.scss';

export default function Resources({ member, shownFaqItems, toggleFaqItem }) {
  return (
    <main>
      <div styleName="style.container">
        <div styleName="style.content">
          <div styleName="style.faqContainer">
            <h1 styleName="style.faqContainerTitle">
              Frequently Asked Questions
            </h1>
            <FaqItem
              open={shownFaqItems.howDoIGetStarted}
              toggle={show => toggleFaqItem('howDoIGetStarted', show)}
              question="How do I get started with cognitive?"
            >
              <p>
                Start by simply signing up for the Topcoder Cognitive
                Community. It’s free and easy, and will give you access to
                exclusive educational resources.
              </p>
              <JoinCommunity
                label="Join the Cognitive Community"
                open={shownFaqItems.joinCommunity}
                theme={{
                  link: {
                    button: style.faqJoinButton,
                  },
                }}
              />
              <p>
                Next, check out our fun educational challenges. These
                challenges are designed to help you learn everything you need
                to compete in future cognitive development challenges. New
                educational challenges launch every few weeks, so be sure to
                check back often.
              </p>
            </FaqItem>
            <FaqItem
              open={shownFaqItems.whyDoINeedIbmCloudAccount}
              question="Why do I need an IBM Cloud Lite account?"
              toggle={show => toggleFaqItem('whyDoINeedIbmCloudAccount', show)}
            >
              <p styleName="style.faqPSpacing">
                Once you’ve signed up for the Topcoder Cognitive Community,
                it’s time to get an IBM Cloud Lite account — entirely free to
                you. In order to participate in cognitive challenges on
                Topcoder, you’ll need to deploy your code in IBM Cloud Lite.
              </p>
              <p>
                <a
                  href="https://console.bluemix.net/registration/free?"
                  target="_blank"
                  rel="noopener noreferrer"
                  styleName="style.link"
                >Register for IBM Cloud Lite</a>
              </p>
            </FaqItem>
            <FaqItem
              open={shownFaqItems.howDoIGetIbmCloudAccount}
              question="How do I get an IBM Cloud account?"
              toggle={show => toggleFaqItem('howDoIGetIbmCloudAccount', show)}
            >
              It’s easy!
              &zwnj;<a
                href="https://console.bluemix.net/registration/free?"
                target="_blank"
                rel="noopener noreferrer"
                styleName="style.link"
              >Click here</a> to get an IBM Cloud Lite account.
            </FaqItem>
            <FaqItem
              open={shownFaqItems.prerequisites}
              question="Are there any prerequisites required to learn cognitive computing?"
              toggle={show => toggleFaqItem('prerequisites', show)}
            />
            <FaqItem
              open={shownFaqItems.incentives}
              question="Are there incentives to participate in the Cognitive challenges?"
              toggle={show => toggleFaqItem('incentives', show)}
            />
            <FaqItem
              open={shownFaqItems.tco18Rules}
              question="What are the official rules for the Topcoder Open 2018 (TCO18) trip competition?"
              toggle={show => toggleFaqItem('tco18Rules', show)}
            />
          </div>
          {
            member ? null : (
              <div styleName="style.joinBox">
                <img
                  alt="Join Community"
                  src={joinImage}
                  styleName="style.joinImage"
                />
                <h1 styleName="style.joinHeading">
                  Join the Topcoder Cognitive Community
                </h1>
                <p styleName="style.joinText">
                  Learn about Cognitive technologies and get hands on experience
                  as a member of the Topcoder Cognitive Community.
                </p>
                <JoinCommunity
                  label="Join The Cognitive Community"
                  theme={{
                    link: {
                      ...standardPrimaryButtonTheme,
                      button: `${standardPrimaryButtonTheme.button} ${
                        style.joinButton}`,
                    },
                  }}
                />
              </div>
            )
          }
        </div>
      </div>
      <div styleName="style.moreQContainer">
        <h1 styleName="style.moreQTitle">Still Have Questions or Need Help?</h1>
        <div styleName="style.moreQContent">
          <div styleName="style.moreQCard style.moreQCard1">
            <LaptopSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://help.topcoder.com/hc/en-us/articles/219069687-Contact-Support"
            >Contact Us</Button>
          </div>
          <div styleName="style.moreQCard style.moreQCard2">
            <MsgsSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://apps.topcoder.com/forums/?module=ThreadList&forumID=609116"
            >Cognitive Forum</Button>
          </div>
          <div styleName="style.moreQCard style.moreQCard3">
            <IbmLogoSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://www.ibm.com/developerworks/"
            >developerWorks&reg;</Button>
          </div>
        </div>
      </div>
      <NewsSignup />
    </main>
  );
}

Resources.propTypes = {
  member: PT.bool.isRequired,
  shownFaqItems: PT.shape().isRequired,
  toggleFaqItem: PT.func.isRequired,
};
