import React from "react";

import HeaderCart from "components/HeaderCart/HeaderCart";

import "./Contact.scss";

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  return (
    <div className="app-contact">
      <HeaderCart>Հետադարձ կապ</HeaderCart>
      <p>Էլ․ հասցե՝ hasmikghukasyan@yahoo.com</p>
      <p>Հասցե՝ Yerevan, Argishti str. 11/3</p>
      <p>Հեռ․՝ +37455-xx-xx-xx</p>
    </div>
  )
}

export default Contact
