import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
    <h1>Chrome P.O.S is the Best ERP Software with POS App</h1> 
    <div className="cards__container">
      <div className="card__wrapper">
        <ul className="cards__items">
<CardItem src="images/img-1.jpg" text="It has a fully-integrated Inventory Management system. Fully illustrated stock information, purchase information, sale information. You will also get a notification before running out any product." label="Inventory Monitoring"  path="/services" />
<CardItem src="images/img-2.jpg" text="Get a complete Graphical view of your business—from Accounts, Sale, Purchase, Inventory and Customer Service with reliable reports. You can make a better decision about the future of your business." label="Make Better Decision"  path="/services" />
<CardItem src="images/img-3.jpg" text="You can control your business from anywhere in the world with an internet connection. To get remote access you can use our android app or you can directly access your sales ERP software from a browser." label="Remote Access"  path="/services" />
        </ul>
        <ul className="cards__items">
        <CardItem src="images/img-4.jpg" text="Chrome P.O.S software is an online and offline ERP system. The offline version has the same features as online. All of your data will be stored on your localhost." label="Online and offline Service"  path="/services" />
<CardItem src="images/img-5.jpg" text="Inserting huge amounts of data such as product info is very time-consuming. To save your time Sales ERP has a CSV(excel) file upload option." label="Bulk Data insert"  path="/services" />
<CardItem src="images/img-6.jpg" text="Sales ERP software has a fully automatic Sales system. There is a POS system for sale. There is also an excellent sales system called GUI POS, which can make the sale faster." label="Comfortable Sales System"  path="/services" />
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Cards
