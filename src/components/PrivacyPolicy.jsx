import React, { useState } from 'react';
import "./privacy-policy.css";
import Banner from "../assets/images/privacy-policy-banner.png";
import MobileBanner from "../assets/images/policy-mobile-banner.png";
import { useEffect } from 'react';


const PrivacyPolicy = () => {
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
        <div className=" container privacy-policy" itemScope itemType="https://schema.org/WebPage">
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
            <h2 itemProp="headline">Collection of Information</h2>
            <p itemProp="articleBody">
              Uni Klinger Limited (“UKL/ Company”) is sensitive to privacy issues on the Internet. We believe it is important you know how we treat the information about you; we receive from you, on the Internet.
            </p>
            <p itemProp="articleBody">
              In general, you can visit <a href="https://uniklinger.com/" itemProp="url" title="Uniklinger website">www.uniklinger.com</a> (“Site”) on the World Wide Web without telling us who you are or revealing any information about yourself. Our Web servers collect the domain names, not the e-mail addresses, of visitors. This information is aggregated to measure the number of visits, average time spent on the Site, pages viewed, etc. UKL uses this information to measure the use of our Site and to improve the content of our Site. Your accessing our Site signifies your unconditional consent to allow the collection of your domain names.
            </p>
            <p itemProp="articleBody">
              We use your IP address to help diagnose problems with our server and/or to administer our Site. This gives us an idea of which parts of our Site-users are visiting.
            </p>
            <p itemProp="articleBody">
              We do not link IP addresses to anything personally identifiable. This means that a user’s session will be tracked, but the user will be anonymous.
            </p>
            <p itemProp="articleBody">
              We also may place and access ‘cookies’ on your system to further help us improve your experience on our website. A ‘cookie’ is a tiny bit of data/ information sent by the Site to your system and stored on your hard drive, to help identify the system when it is used to access the Site again. ‘Cookies’ are only used to personalize the Site to your preferences and enable you to access the Site more quickly and efficiently. Besides the above, ‘cookies’ are not linked to anything personally identifiable.
            </p>
            <p itemProp="articleBody">
              By accessing our website, you are deemed to have provided your consent for placing and accessing such ‘cookies’. You may change the privacy settings of your browser to notify you when you receive a ‘cookie’ or to disable them altogether.
            </p>
            <p itemProp="articleBody">
              Our Site’s feedback/enquiry/registration link requires you to give us contact information like your name and email address. We use this contact information from the registration-form to send you information about our Company/products/services.
            </p>
            <p itemProp="articleBody">
              You may choose not to provide your contact information. However, if you do not provide the contact information which is mandatory for responding to your enquiry/enabling your registration, then we will not be able to address your enquiry/enable your registration.
            </p>
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Disclosure of Information</h2>
            <p itemProp="articleBody">
              If required, UKL may disclose the above information to (a) UKL’s affiliates and subsidiaries and other entities within UKL; (b) the Company’s employees, vendors, agents and professional advisors working on its behalf for; (c) Service-providers who assist in protecting and securing UKL’s systems and provide services to UKL which require the processing of personal data; or (d) such third parties as may be required for inter-alia:
            </p>
            <ul itemProp="articleBody">
              <li>Improvement of UKL’s products and services;</li>
              <li>Processing orders or applications made by you;</li>
              <li>For Marketing/Promotional activities;</li>
              <li>Creating products/services to meet your needs;</li>
              <li>Processing your request/queries/job applications/etc.;</li>
              <li>Processing and responding to your requests and improving UKL’s operations;</li>
              <li>Data profiling/user analysis; or</li>
              <li>Communicating by email or any other form with you about UKLs products, services and businesses.</li>
            </ul>
            <p itemProp="articleBody">
              By accessing our website, you are deemed to have provided your consent for such disclosure.
            </p>
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Third Party Content</h2>
            <p itemProp="articleBody">
              For your convenience, this page may contain certain hyperlinks to other Site pages as well as to websites outside UKL. In addition, you may link to our Site from another website. We are not responsible for the privacy policies and practices of other websites, even if you access those using links from our Site. We can make no promises or guarantees regarding data collection on the hyperlinked pages and on websites that are not owned by UKL. We recommend that you check the policy of each website you visit, or link from, and contact the owners or operators of such websites, should you have any concerns or questions.
            </p>
            <p itemProp="articleBody">
              In your use of the Site, you may enter into correspondence with, purchase goods and/or services from, or participate in promotions of advertisers or members or sponsors of the Site. Unless otherwise stated, any such correspondence, advertisement, purchase or promotion, including the delivery of and the payment for goods and/or services, and any other term, condition, warranty or representation associated with such correspondence, purchase or promotion, is solely between you and the applicable third party. You agree that UKL has no liability, obligation or responsibility for any such correspondence, purchase or promotion between you and any such third party.
            </p>
            <p itemProp="articleBody">
              Such links to other websites do not indicate any responsibility or endorsement on our part for the external website concerned, its contents or the links displayed on it. These links are provided only as a convenience, in order to help you find relevant websites, services and/or products that may be of interest to you, quickly and easily. It is your responsibility to decide whether any services and/or products available through any of these websites are suitable for your purposes. UKL is not responsible for the owners or operators of these websites or for any goods or services they supply or for the content of their websites and does not give or enter into any conditions, warranties or other terms or representations in relation to any of these or accept any liability in relation to any of these (including any liability arising out of any claim that the content of any external web site to which this Site includes a link infringes the intellectual property rights of any third party).
            </p>
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Intellectual Property</h2>
            <p itemProp="articleBody">
              The contents including logos, graphics, pictures, photographs, articles, presentations, maps, write-ups, profiles, illustrations, audio-visuals and the design and layout (collectively “material”) of the UKL Site are subject to copyright protection and other laws for the protection of intellectual property rights. All copyright and other intellectual property rights in this material are either owned by UKL or have been licensed to UKL by the owner(s) of those rights so that it can use this material as part of this Site. No dissemination or alteration of the content of these pages or of the frames or similar measures is permitted. Moreover, these contents may not be copied, disseminated, modified or made available to third parties for any commercial purposes. UKL retains copyright on all material.
            </p>
            {/* Other paragraphs go here */}
          </div>
      
          <div className="section" itemScope itemType="https://schema.org/Article">
            <h2 itemProp="headline">Licensing</h2>
            <p itemProp="articleBody">
              The intellectual property contained on this Site is legally protected through patents, trademarks, copyrights and designs. This Site does not grant any license to use the intellectual property owned by companies of the UKL. Duplication, alteration, dissemination, reproduction, further transmission in any form or by any means and any other illegitimate use is strictly prohibited.
            </p>
            <p itemProp="articleBody">
              Subject to the terms and conditions set forth herein, UKL grants the user/viewer a non-exclusive, non-transferable, limited right to access, use and display this Site and the materials therein. You agree not to interrupt or attempt to interrupt the operation of the Site in any manner. Unless otherwise specified, the Site is for personal and non-commercial use. You shall not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer or sell any information, software, products or services obtained from this Site.
            </p>
          </div>
        </div>
      );
      
}

export default PrivacyPolicy