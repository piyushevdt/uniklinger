import React, { useState } from 'react';
import "./privacy-policy.css";
import Banner from "../assets/images/terms&conditions.png";
import MobileBanner from "../assets/images/mobileT&C.png";
import { useEffect } from 'react';


const TermsAndConditions = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    useEffect(() => {
        // Create a new ResizeObserver instance
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            setScreenWidth(entry.contentRect.width);
          }
        });
    
        // Start observing the selected element
        resizeObserver.observe(document.body);
      }, [screenWidth]);
      return (
        <div className="fluid-container " style={{ paddingTop: '60px' }}>

        <div className="container " itemScope itemType="https://schema.org/WebPage">
          <div>
            <img
              src={screenWidth > 820 ? Banner : MobileBanner}
              alt="Privacy policy banner"
              description="Privacy policy banner"
              style={{ width: '100%', paddingTop: '40px', paddingBottom: '40px' }}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            />
          </div>
          
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Terms & Conditions of Use</h2>
            <p itemProp="articleBody">
            The use of any product, service or feature (the “Materials”) available on the Site by any user of the Site (“You” or “Your” hereafter) shall be governed by the following terms of use. In the event of You not agreeing to these terms and conditions, You are requested by UKL to refrain from using the Web Site or downloading Materials from the Web Site.            </p>
            <p itemProp="articleBody">
            Please proceed only if You accept all the conditions enumerated herein above, out of Your free will and consent. By accessing and browsing Uni Klinger Limited (“UKL”/ “Company”) website or by using and/or downloading any content from the [www.uniklinger.com] (“Site”), You agree to and accept the Terms of Use as set forth herein. “The Company” refers to Uni Klinger Limited , including its affiliates (also referred to as “Us”, or “Our”).            </p>
            <p itemProp="articleBody">
            You hereby agree and confirm that: Access to this Site and the information contained herein is not unlawful under the applicable laws of the jurisdiction where You are resident and from where You are accessing this Site. Access to information on the Site does not in any manner constitute an offer to sell or a solicitation of any offer to buy any of the securities of UKL . No securities regulatory body or similar authority in any jurisdiction has reviewed or in any way passed upon or endorsed the information on this Site or the merits of the securities that may be described herein and any representation to the contrary may be construed as an offence under applicable laws.            </p>
            <p itemProp="articleBody">
            You shall not circulate copies of this information in any manner (including but not restricted to photocopying and email) of the information and data on this Site. You agree not to reproduce, re-transmit, distribute, disseminate, sell, publish, broadcast or circulate the contents to anyone.            </p>
            
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">You agree not to:</h2>
           
            <ul itemProp="articleBody">
              <li>Interrupt or attempt to interrupt the operation of the Site in any way.</li>
<li>Intrude or attempt to intrude into the Site in any way.</li>
<li>Post any obscene, defamatory or annoying materials on the Site.</li>
<li>Obscure any Materials already posted on the Site.</li>
<li>Use the Site or any contents thereof to defame, intimidate, annoy or otherwise cause nuisance or breach the rights of any person.</li>
              
            </ul>
          
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">The use of this Site is subject to the following restrictions:</h2>
            <ul itemProp="articleBody">
              <li>Retain, on all copies of the Materials downloaded, all copyright, trademarks and other proprietary notices contained in the Materials.</li>
<li>Not modify the Materials in any way nor reproduce or display, perform, or distribute or otherwise use them for any public or commercial purpose.</li>
<li>Not transfer the Materials to any other person unless You give them notice of, and they agree to accept, the obligations arising under these terms and conditions of use. You agree to abide by all additional restrictions displayed on the Site as it may be updated from time to time. This Site, including all Materials, is protected and governed by appropriate intellectual property laws and treaty provisions. You agree to comply with all copyright laws worldwide in Your use of this Site and to prevent any unauthorized copying of the Materials. Except as expressly provided herein, UKL does not grant any express or implied right to You under any patents, trademarks, copyrights or trade secret information.</li>
<li>The information, Materials or services included in or available through this Site may include inaccuracies or typographical errors. Changes are periodically made to the Site/services and to the information therein. UKL and/or its respective suppliers may make improvements and/or changes in the Site/services at any time.</li>
<li>Advice received via this Site should not be relied upon for personal, medical, legal or financial decisions and You should consult an appropriate professional for specific advice tailored to Your situation.</li>
<li>You specifically agree that UKL shall not be responsible for unauthorized access to or alteration of Your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through this Site. You specifically agree that UKL is not responsible or liable for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party or any infringement of another’s rights, including intellectual property rights. You specifically agree that UKL is not responsible for any content sent using and/or included in this Site by any third party.</li>
<li>If You are dissatisfied with any portion of this Site/services, or with any of these terms of use, Your sole and exclusive remedy is to discontinue using this Site/services.</li>
            </ul>
          
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">General Terms and Conditions</h2>
            <p itemProp="articleBody">
            UKL does not routinely monitor Your postings to the Site but reserves the right to do so. However, in Our efforts to promote good citizenship within the Internet community, if UKL becomes aware of inappropriate use of the Site or any of its Services, UKL will respond in any way that, in its sole discretion, UKL deems appropriate. You acknowledge that UKLwill have the right to report to law enforcement authorities any actions that may be considered illegal, as well as any information it receives of such illegal conduct. When requested, UKL will co-operate fully with law enforcement agencies in any investigation of alleged illegal activity on the Internet.            </p>
            {/* Other paragraphs go here */}


            <ul itemProp="articleBody">
              <li>Submissions and unauthorised use of any materials contained on this Site may violate copyright laws, trademark laws, the laws of privacy and publicity, certain communications statutes and regulations and other applicable laws and regulations. You alone are responsible for Your actions or the actions of any person using Your user name and/or password. As such, You shall indemnify, defend, save and hold harmless UKL and its officers, directors, employees, affiliates, agents, licensors, and business partners harmless from and against any and all loss, costs, damages, liabilities, and expenses (including attorneys’ fees) incurred by Us in relation to, arising from, or for the purpose of avoiding, any claim or demand from a third party that Your use of the Site or the use of the Site by any person using Your user name and/or password (including without limitation Your participation in the posting areas or Your Submissions) violates any applicable law or regulation, or the rights of any third party or in case You violate these terms and conditions</li>

<li>UKL reserves the right to terminate access to this Site at any time and without notice. UKL may suspend the operation of this Site for support or maintenance work, in order to update the content or for any other reason.</li>
<li>Personal details provided to UKL through this Site will only be used in accordance with Our privacy policy. Please read this carefully before going on. By providing Your personal details to Us, You are consenting to its use in accordance with Our privacy policy.</li>
<li>Unless otherwise specified, these terms and conditions shall apply to the Site’s privacy policy as well.</li>
</ul>
          </div>





      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Contacting the Site</h2>
            <p itemProp="articleBody">
            If You have any questions about the terms and conditions or the privacy statement, the practices of this Site, or Your dealings with this Site, You can provide Feedback from the Contact-Us link on the home-page.            </p>
           
          </div>


          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Applicable Law & Jurisdiction</h2>
            <p itemProp="articleBody">
            Use of this website and the interpretation of this Disclaimer shall be governed by and construed in accordance with the laws of India without regard to the choice or conflicts of law provisions of any jurisdiction. You agree, in the event of any dispute arising out of or in relation to terms and conditions herein or any dispute arising in relation to the Site whether in contract or tort or otherwise, to submit to the exclusive jurisdiction of the courts located at Mumbai, India for the resolution of all such disputes.           
            </p>
          </div>
        </div>
        </div>
      );
      
}

export default TermsAndConditions