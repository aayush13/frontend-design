import Separator from "../../common/Separator";
import {
  FooterContainer,
  FooterFrame,
  CompanyDetails,
  ReferenceLinks,
  QuickLinks,
  Legals,
  FooterListItem,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterFrame>
        <CompanyDetails>
            <img src="/logo_full.svg" width="100%" />
        </CompanyDetails>
        <ReferenceLinks>
          <QuickLinks>
            <FooterListItem>Home</FooterListItem>
            <FooterListItem>Data</FooterListItem>
            <FooterListItem>Cases</FooterListItem>
            <FooterListItem>Customers</FooterListItem>
            <FooterListItem>Search Data</FooterListItem>
            <FooterListItem>Custom Fields</FooterListItem>
            <FooterListItem>Support</FooterListItem>
          </QuickLinks>
          <Legals>
            <FooterListItem>Terms & Conditons</FooterListItem>
            <FooterListItem>Privacy Policy</FooterListItem>
            <FooterListItem>AI Safety Policy</FooterListItem>
            <FooterListItem>Cookie Policy</FooterListItem>
            <FooterListItem>Compliance Statement</FooterListItem>
          </Legals>
        </ReferenceLinks>
      </FooterFrame>
      <Separator/>

    </FooterContainer>
  );
};


export default Footer;