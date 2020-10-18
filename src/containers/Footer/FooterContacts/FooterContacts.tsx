import React from "react";

import TextBlock from "components/TextBlock/TextBlock";
import ContactsItem from "components/ContactsItem/ContactsItem";

import "./FooterContacts.scss"

interface IFooterContactsProps {}

const FooterContacts: React.FC<IFooterContactsProps> = () => {
  return (
    <div className="footer-contacts">
      <TextBlock className="footer-contacts__text">Հետադարձ կապ</TextBlock>
      <ContactsItem>Էլ․ հասցե՝ hasmikghukasyan@yahoo.com</ContactsItem>
      <ContactsItem>Հասցե՝ Yerevan, Argishti str. 11/3</ContactsItem>
      <ContactsItem>Հեռ․՝ +37455-xx-xx-xx</ContactsItem>
    </div>
  )
}

export default FooterContacts;
