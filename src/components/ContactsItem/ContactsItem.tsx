import React from "react";

import "./ContactsItem.scss";

interface IContactsItemProps {
  className?: string
}

const ContactsItem: React.FC<IContactsItemProps> = ({
  className = "",
  children,
}) => {
  return (<p className={`app-contacts-item ${className}`}>{children}</p>)
}

export default ContactsItem
