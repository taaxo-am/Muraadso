import React from 'react';
import Styles from './styles.module.css'
import Logo from './circular-logo.png'
import Footer from "../../components/footer/Footer";

const Shipping = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <img src={Logo} alt=""/>
                <h4>Shipping</h4>
                <h5>What are the delivery charges?</h5>
                <p>Delivery charge varies with each Seller.</p>
                <p>Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal
                    delivery charge helps them offset logistics costs. Please check your order summary to understand the
                    delivery charges for individual products.</p>
                <p>For Products listed as F-Assured a Rs 40 charge for delivery per item is applied if the order value
                    is less than Rs 500. While, orders of Rs 500 or above are delivered free.</p>
                <h5>Why does the delivery date not correspond to the delivery timeline of X-Y business days?</h5>

                It is possible that the Seller or our courier partners have a holiday between the day your placed your
                order and the date of delivery, which is based on the timelines shown on the product page. In this case,
                we add a day to the estimated date. Some courier partners and Sellers do not work on Sundays and this is
                factored in to the delivery dates.

                <h5>What is the estimated delivery time?</h5>

                Sellers generally procure and ship the items within the time specified on the product page. Business
                days exclude public holidays and Sundays.

                Estimated delivery time depends on the following factors:

                The Seller offering the product
                Product's availability with the Seller
                The destination to which you want the order shipped to and location of the Seller.

                <h5>Are there any hidden costs (sales tax, octroi etc) on items sold by Sellers on Flipkart?</h5>

                There are NO hidden charges when you make a purchase on Flipkart. List prices are final and
                all-inclusive. The price you see on the product page is exactly what you would pay.

                Delivery charges are not hidden charges and are charged (if at all) extra depending on the Seller's
                shipping policy.

                <h5>Why does the estimated delivery time vary for each seller?</h5>

                You have probably noticed varying estimated delivery times for sellers of the product you are interested
                in. Delivery times are influenced by product availability, geographic location of the Seller, your
                shipping destination and the courier partner's time-to-deliver in your location.

                Please enter your default pin code on the product page (you don't have to enter it every single time) to
                know more accurate delivery times on the product page itself.

                <h5>Seller does not/cannot ship to my area. Why?</h5>

                Please enter your pincode on the product page (you don't have to enter it every single time) to know
                whether the product can be delivered to your location.

                If you haven't provided your pincode until the checkout stage, the pincode in your shipping address will
                be used to check for serviceability.

                Whether your location can be serviced or not depends on

                Whether the Seller ships to your location
                Legal restrictions, if any, in shipping particular products to your location
                The availability of reliable courier partners in your location
                At times Sellers prefer not to ship to certain locations. This is entirely at their discretion.

                <h5>Why is the CoD option not offered in my location?</h5>

                Availability of CoD depends on the ability of our courier partner servicing your location to accept cash
                as payment at the time of delivery.

                Our courier partners have limits on the cash amount payable on delivery depending on the destination and
                your order value might have exceeded this limit. Please enter your pin code on the product page to check
                if CoD is available in your location.

                <h5>I need to return an item, how do I arrange for a pick-up?</h5>

                Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once
                you have initiated a return.

                Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot
                be arranged through Ekart, you can return the item through a third-party courier service. Return fees
                are borne by the Seller.

                <h5>What do the different tags like "In Stock", "Available" mean?</h5>

                <h5>'In Stock'</h5>

                FFor items listed as "In Stock", Sellers will mention the delivery time based on your location pincode
                (usually 2-3 business days, 4-5 business days or 4-6 business days in areas where standard courier
                service is available). For other areas, orders will be sent by Registered Post through the Indian Postal
                Service which may take 1-2 weeks depending on the location.

                <h5>'Available'</h5>

                The Seller might not have the item in stock but can procure it when an order is placed for the item. The
                delivery time will depend on the estimated procurement time and the estimated shipping time to your
                location.

                <h5>'Preorder' or 'Forthcoming'</h5>

                Such items are expected to be released soon and can be pre-booked for you. The item will be shipped to
                you on the day of it's official release launch and will reach you in 2 to 6 business days. The Preorder
                duration varies from item to item. Once known, release time and date is mentioned. (Eg. 5th May, August
                3rd week)

                <h5>'Out of Stock'</h5>

                Currently, the item is not available for sale. Use the 'Notify Me' feature to know once it is available
                for purchase.

                <h5>'Imported'</h5>

                Sometimes, items have to be sourced by Sellers from outside India. These items are mentioned as
                'Imported' on the product page and can take at least 10 days or more to be delivered to you.

                <h5>'Back In Stock Soon'</h5>

                The item is popular and is sold out. You can however 'book' an order for the product and it will be
                shipped according to the timelines mentioned by the Seller.

                <h5>'Temporarily Unavailable'</h5>

                The product is currently out of stock and is not available for purchase. The product could to be in
                stock soon. Use the 'Notify Me' feature to know when it is available for purchase.

                <h5>'Permanently Discontinued'</h5>

                This product is no longer available because it is obsolete and/or its production has been discontinued.

                <h5>'Out of Print'</h5>

                This product is not available because it is no longer being published and has been permanently
                discontinued.

                <h5>Does Flipkart deliver internationally?</h5>
                As of now, Flipkart doesn't deliver items internationally.

                You will be able to make your purchases on our site from anywhere in the world with credit/debit cards
                issued in India and 21 other countries, but please ensure the delivery address is in India.
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Shipping;
