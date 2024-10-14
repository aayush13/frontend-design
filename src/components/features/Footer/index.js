import Separator from "../../common/Separator";
import {
  FooterContainer,
  FooterFrame,
  CompanyDetails,
  ReferenceLinks,
  QuickLinks,
  Legals,
  Tagline,
  FooterListItem,
  FooterContentContainer,
  FooterListHeader,
  Contact,
  Email,
  AddressLine,
  Tel,
  CopyrightDetails,
  CopyrightName,
  SocialMedia,
  MediaIcons
  
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
    <FooterContentContainer>
      <FooterFrame>
        <CompanyDetails>
            <img src="/logo_full.svg" width="100%" />
            <Tagline data-testid="tagline">Justice for all.</Tagline>
            <Contact>
                <Email>hello@courtcorrect.com</Email>
                <AddressLine>33 Percy St, London, W1T 2DF</AddressLine>
                <Tel>020 7867 3925</Tel>
            </Contact>
        </CompanyDetails>
        
        <ReferenceLinks>
          <QuickLinks>
            <FooterListHeader>Quick Links</FooterListHeader>
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>Data</FooterListItem>
            <FooterListItem>Cases</FooterListItem>
            <FooterListItem>Customers</FooterListItem>
            <FooterListItem>Search Data</FooterListItem>
            <FooterListItem>Custom Fields</FooterListItem>
            <FooterListItem>Support</FooterListItem>
          </QuickLinks>
          <Legals>
            <FooterListHeader>Legals</FooterListHeader>
            <FooterListItem>Terms & Conditons</FooterListItem>
            <FooterListItem>Privacy Policy</FooterListItem>
            <FooterListItem>AI Safety Policy</FooterListItem>
            <FooterListItem>Cookie Policy</FooterListItem>
            <FooterListItem>Compliance Statement</FooterListItem>
          </Legals>
        </ReferenceLinks>
      </FooterFrame>
      <Separator/>
      <CopyrightDetails>
        <CopyrightName>
            <>&copy; 2023 CourtCorrect LTD</>
        </CopyrightName>
        <SocialMedia>
            <MediaIcons>
                <img src="/facebook.svg" width="100%" height="100%" alt="facebook"/>
            </MediaIcons>
            <MediaIcons>
                <img src="/twitter.svg" width="100%" height="100%" alt="twitter"/>
            </MediaIcons>
            <MediaIcons>
                <img src="/instagram.svg" width="100%" height="100%" alt="insta"/>
            </MediaIcons>
            <MediaIcons>
                <img src="/youtube.svg" width="100%" height="100%" alt="youtube"/>
            </MediaIcons>
            <MediaIcons>
                <img src="/linkedin.svg" width="100%" height="100%" alt="linkedin"/>
            </MediaIcons>
            <MediaIcons>
                <img src="/tiktok.svg" width="100%" height="100%" alt="tiktok"/>
            </MediaIcons>
        </SocialMedia>
      </CopyrightDetails>
      </FooterContentContainer>

    </FooterContainer>
  );
};


export default Footer;