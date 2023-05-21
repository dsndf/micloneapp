import React from "react";
import "./Footer.css";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div style={{
      paddingTop:"50px"
    }}>
  
      <div className="Footer">
        <div className="b1">
          {Icons.arrows}
          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
                //   border:"1px solid red"
                margin: "2px 0",
              }}
            >
              Hassel-free replacement
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "550",
                //   border:"1px solid red"
              }}
            >
              10-day easy replacement policy on mi.com
            </p>
          </div>
        </div>
        <div className="b1">
          {Icons.Verfied}

          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
                margin: "2px 0",
              }}
            >
              100% secure payments
            </p>
            <p
              style={{
                //   color: "#b2b2b2",
                fontWeight: "550",

                fontSize: "15px",
              }}
            >
              We support Cards, Wallets, EMI and COD
            </p>
          </div>
        </div>
        <div className="b1">
          {Icons.map}
          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
                margin: "2px 0",
              }}
            >
              Vast service network
            </p>
            <p
              style={{
                //   color: "#b2b2b2",
                fontWeight: "550",
                fontSize: "15px",
              }}
            >
              1000 Mi service-centers across 600 cities
            </p>
          </div>
        </div>
      </div>
      <div className="Footer1">
        <div>
          <h4>LETS'S STAY IN TOUCH</h4>
          <small style={{ display: "block" }}>
            Get updates on sale specials and more.
          </small>
        </div>
        <div>
          <input type="email" placeholder="Enter Email Address" />
          <small>Thanks.You are on our email list for spacial offers.</small>
        </div>
        <div>
          <h4>FOLLOW MI</h4>
          <small>we want to hear from you!</small>
        </div>

        <div className="icons">
          {Icons.fb}
          {Icons.utube}
          {Icons.instagram}
          {Icons.twitter}
        </div>
      </div>
      <div className="preFooter2">
        <div className="Footer2">
          <div>
            <h5>SUPPORT</h5>
            <br />
            <p>Online Help</p>
            <p>Customer Service</p>
            <p>Shipping FAQ</p>
            <p>Service Centers</p>
            <p>Warrenty</p>
            <p>Mi Exchange</p>
            <p>Bulk Offer</p>
            <p>User Guide</p>
            <p>Laptop Drivers</p>
            <p>Mi Screen Protect</p>
            <p>Mi Extended Warrenty</p>
          </div>
          <div>
            <h5>SHOP AND LEARN</h5>
            <br />
            <p>Mi Home</p>
            <p>Mi 11 UltraMi 11X</p>
            <p>Mi 11ProRedmi 8</p>
            <p>Redmi 9Redmi 9 Prime</p>
            <p>Redmi Note 10</p>
            <p>Redmi Note 10 Pro</p>
            <p>Redmi Note 10 Pro Max</p>
            <p>Redmi 9 Pro</p>
            <p>Redmi 9 Pro Max</p>
          </div>
          <div>
            <h5>RETAIL STORE</h5>
            <br />
            <p>Mi Home</p>
            <p>Mi Authorized Stores</p>
          </div>
          <div>
            <h5>ABOUT</h5>
            <br />
            <p>Xioami</p>
            <p>Mediakit</p>
            <p>Culture</p>
            <p>User Agreement</p>
            <p>Privacy Policy</p>
            <p>Declarations</p>
            <p>Integrity & Compilance</p>
            <p>Smartphone Quality</p>
            <p>TV Quality</p>
            <p>Service Quality</p>
            <p>Mi Exchange</p>
            <p>Environment</p>
          </div>
          <div>
            <h5>SUPPORT</h5>
            <br />
            <p>Email</p>
            <p>Careers</p>
          </div>
          <div>
            <p>Chat with our Virtual</p>
            <p>Al Bot(24/7 Live Agent</p>
            <p>Support)</p>
            <button>CHAT NOW</button>
          </div>
        </div> 
        <div  style={{
        border:"1px solid grey",
        borderLeft:"none",
        borderBottom:"none",
        borderRight:"none",
     
      }}>
        <p>Copyright &copy;-2021 Xiomi.All Rights Reserved</p>
      </div>
      </div>
     

    </div>
  );
};

export default Footer;
