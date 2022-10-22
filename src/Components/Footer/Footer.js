import React, { Component } from "react";
import $ from 'jquery';
import '../../js/custom.js';
import flag from "../../images/icons/16.png";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            *Instant savings, otherwise referred to as instant Cashback on the Apple Store Online,
            of 7% of invoice value is available for qualifying HDFC Bank Credit Cards & HDFC Credit
            Card EMI. This offer is also open to all American Express Cardmembers whose accounts are
            valid and in good standing. An American Express Cardmember (“Cardmember”) for the purpose
            of this offer means a person holding a card issued by American Express Banking Corp. in India.
            This offer is not valid on cards issued by a third party bearing the name, trademark, service
            mark or logo of American Express (“Network Cards”) issued in India. This offer is valid for
            American Express Corporate Cards issued by American Express Banking Corp. in India. If utilising
            this offer with an American Express Charge Card, it cannot be combined with EMI offers. For
            more information about the type of account you hold and its current status, please refer to your bank.
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
            >
              {" "}
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              {" "}
              here
            </a>
            .
          </p>
          <p>
            Offer is only available on qualifying purchases made between 26 September 2022 and
            24 October 2022. Offer is limited to maximum instant savings amount of ₹7000 per
            successful single order of ₹41900 and above. The instant savings offer is available
            for up to two orders within the promotional period with an eligible card. Any additional
            orders may be cancelled. Card eligibility is subject to terms and conditions between
            you and your card-issuing bank. Total transaction value is calculated after any trade-in
            credit or eligible discount is applied. Any subsequent order adjustment(s) or
            cancellation(s) may result in instant savings being recalculated, and any refund may
            be adjusted to account for instant savings reclaim, which may result in no refund being
            made to you. Offer may be revised or withdrawn at any time without any prior notice.
            Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase
            Plan pricing. Multiple separate orders cannot be combined for instant savings. Offer
            is valid for a limited period. Terms & conditions apply.
            <br />
            <br />
            **No Cost EMI is available for purchases made using qualifying credit cards on 3- or
            6-month tenures only. Minimum order spend applies as per your credit card’s issuing
            bank threshold. Offer cannot be combined with Apple Store for Education or Corporate
            Employee Purchase Plan pricing. Credit card eligibility is subject to terms and
            conditions between you and your credit card–issuing bank. Offer may be revised or
            withdrawn at any time without any prior notice. Terms & conditions apply.
            <br />
            <br />
            Representative example: Based on a 6-month tenure. ₹69900 total cost
            includes 16% p.a. and No Cost EMI savings of ₹3149, paid over 6 months as
            six monthly payments of ₹11650.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">HomePod</a>
              </li>
              <li>
                <a href="#">iPod touch</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple News+</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Arcade</a>
              </li>
              <li>
                <a href="#">Apple Card</a>
              </li>
              <li>
                <a href="#">iCloud</a>
              </li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
              <li>
                <a href="#">Refurbished and Clearance</a>
              </li>
              <li>
                <a href="#">Financing</a>
              </li>
              <li>
                <a href="#">Apple Trade In</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shopping Help</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li>
                <a href="#">Apple and Business</a>
              </li>
              <li>
                <a href="#">Shop for Business</a>
              </li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li>
                <a href="#">Apple and Education</a>
              </li>
              <li>
                <a href="#">Shop for College</a>
              </li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li>
                <a href="#">Manage Your Apple ID</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li>
                <a href="#">Apple and Education</a>
              </li>
              <li>
                <a href="#">Shop for College</a>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Field Trip</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            {/* <div className="flag-wrapper">
              <img src={flag} />
            </div>{" "} */}
            <div className="footer-country-name">India</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
