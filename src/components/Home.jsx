import { useState } from "react";
import ShowMore from "../assets/plus.png"
import ShowLess from "../assets/minus.png"

function HomeScreen() {
    const [seeMore, setSeeMore] = useState([false, false, false, false, false, false])

    const toggleSection = (index) => {
        setSeeMore(prevSeeMore =>
            prevSeeMore.map((item, i) => (i === index ? !item : item))
        );
     };
    return (
        <div className="home">
            <div className="landing">
                <header>
                    <h1>Unlock Your potential</h1>
                    <p>fuel your journey <br /> with  <em>premium nutrition</em> </p>
                </header>
                <div className="bg">

                </div>
                <h3>
                    At foodspring we're revolutionizing nutrition and fitness. Founded in Berlin in 2013, we've quickly become a leading brand in sports nutrition and functional foods across Europe
                </h3>
            </div>
            <main>
                <div className="advantages">
                    <h1>Our Advantages</h1>
                    <div className="advantages-card">
                        <section>
                            <div className="img"></div>
                            <div className="advantages-info">
                                <h1>Premium Quality Ingredients</h1>
                                <p>
                                    We use only the finest natural and organic components to ensure every product meets the highest standards.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div className="img2"></div>
                            <div className="advantages-info">
                                <h1>Innovative Products</h1>
                                <p>Our experts continuously develop new products aligned with the latest health and fashion trends</p>
                            </div>
                        </section>
                        <section>
                            <div className="img3"></div>
                            <div className="advantages-info">
                                <h1>Cutting-Edge Research</h1>
                                <p>Our team is constantly researching to stay ahead of trends and advancements in nutrition science.</p>
                            </div>
                        </section>
                        <section>
                            <div className="img4"></div>
                            <div className="advantages-info">
                                <h1>Community Approach</h1>
                                <p>We believe in building a community around wellness. Through events, collaborations, and customer feedback, we keep our customers at the heart of everything we do.</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="essentials">
                    <nav>
                        <h1>Essential Packs</h1>
                        <button>Show All</button>
                    </nav>
                    <div className="essentials-card">
                        <section>
                            <div className="img"></div>
                            <div className="essentials-info">
                                <header>
                                    <aside>
                                        <h1>Muscle Pack Basic</h1>
                                        <h2>3 Products</h2>
                                    </aside>
                                    <h1>$59.99</h1>
                                </header>
                                <button>Add To Cart</button>
                                <p>
                                    Stay strong with these three premium-quality products that will boost your protein intake and help get you through each intense training session.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div className="img2"></div>
                            <div className="essentials-info">
                                <header>
                                    <aside>
                                        <h1>Muscle Pack Pro</h1>
                                        <h2>5 Products</h2>
                                    </aside>
                                    <h1>$99.99</h1>
                                </header>
                                <button>Add To Cart</button>
                                <p>
                                    The perfect gym-bag kit. There is a pre-workout booster for low energy levels; a refreshing post-workout drink; and plenty of protein to top up your intake and power you on.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div className="img3"></div>
                            <div className="essentials-info">
                                <header>
                                    <aside>
                                        <h1>Shape Pack Basic</h1>
                                        <h2>3 Products</h2>
                                    </aside>
                                    <h1>$59.99</h1>
                                </header>
                                <button>Add To Cart</button>
                                <p>
                                    Our 3-piece Shape Pack supports your weight-loss goals, with delicious, easy solutions that bring real results.
                                    All the products you need to make weight loss a part of your lifestyle – with premium ingredients, vitamins and minerals, delicious shakes and plant-based supplements.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div className="img4"></div>
                            <div className="essentials-info">
                                <header>
                                    <aside>
                                        <h1>Shape Pack Pro</h1>
                                        <h2>5 Products</h2>
                                    </aside>
                                    <h1>$99.99</h1>
                                </header>
                                <button>Add To Cart</button>
                                <p>
                                    All the products you need to make weight loss a part of your lifestyle – with premium ingredients, vitamins and minerals, delicious shakes and plant-based supplements.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="transform">
                    <section>
                        <h1>Ready to Transform Your Health?</h1>
                        <p>
                            Take the first step towards a healthier, fitter you. Visit our online store and discover how foodspring can help your journey.
                        </p>
                        <button>Shop Now</button>
                    </section>
                    <section className="transform-bg"></section>
                </div>
                <div className="questions">
                    <h1>Frequently Asked Questions</h1>


<div className="faq">
                <section>
                <header>
                    <h1> Where are foodsprings products made? </h1>
                    <button onClick={() => toggleSection(0)} className={seeMore[0] ? 'active' : ''}>
                        <img src={seeMore[0] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[0] ? 'active' : ''}`}>
                   <p>
                        Foodspring’s products are primarily made in Germany, where we maintain strict quality control standards and ensure all products are crafted with care. By producing locally, we can better guarantee the freshness and quality that Foodspring is known for, while supporting sustainable practices in our sourcing and manufacturing.
                   </p>
                </main>
                </section>
                <section>
                <header>
                    <h1> Do you offer vegan prodcuts? </h1>
                    <button onClick={() => toggleSection(1)} className={seeMore[1] ? 'active' : ''}>
                        <img src={seeMore[1] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[1] ? 'active' : ''}`}>
                   <p>
                        Yes, we offer a range of vegan products to cater to those who follow a plant-based lifestyle. Foodspring is committed to providing options that meet various dietary needs, including vegan protein powders, snacks, and other nutritional supplements. Each product is carefully formulated to deliver optimal nutrition without any animal-derived ingredients.
                   </p>
                </main>
                </section>
                <section>
                <header>
                    <h1> How can I get personalized nutrition advice? </h1>
                    <button onClick={() => toggleSection(2)} className={seeMore[2] ? 'active' : ''}>
                        <img src={seeMore[2] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[2] ? 'active' : ''}`}>
                   <p>
                        To support your wellness journey, we offer personalized nutrition advice through our online resources and certified nutrition experts. Our team is here to help you make the best choices for your health and fitness goals. For one-on-one guidance, you can book a consultation with our nutrition specialists through the Foodspring website.
                   </p>
                </main>
                </section>
                <section>
                <header>
                    <h1> What is your return policy? </h1>
                    <button onClick={() => toggleSection(3)} className={seeMore[3] ? 'active' : ''}>
                        <img src={seeMore[3] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[3] ? 'active' : ''}`}>
                   <p>
                        We understand that sometimes a product might not meet your expectations. Foodspring offers a return policy that allows you to return unopened products within 30 days of purchase for a refund. For detailed instructions on initiating a return, please visit our website or contact our customer service team for assistance.
                   </p>
                </main>
                </section>
                <section>
                <header>
                    <h1> Are your packaging materials eco-friendly? </h1>
                    <button onClick={() => toggleSection(4)} className={seeMore[4] ? 'active' : ''}>
                        <img src={seeMore[4] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[4] ? 'active' : ''}`}>
                   <p>
                        Yes, Foodspring is dedicated to sustainability, and we are continuously working to improve our packaging. Many of our packaging materials are recyclable, and we’re actively exploring more eco-friendly options. We aim to minimize our environmental footprint while still ensuring that your products arrive fresh and well-protected.
                   </p>
                </main>
                </section>
                <section>
                <header>
                    <h1> Do you ship internationally? </h1>
                    <button onClick={() => toggleSection(5)} className={seeMore[5] ? 'active' : ''}>
                        <img src={seeMore[5] ? ShowLess : ShowMore} alt="" />
                    </button>
                </header>
                <main className={`more ${seeMore[5] ? 'active' : ''}`}>
                   <p>
                        Yes, Foodspring ships to various countries worldwide. While shipping options and times may vary depending on your location, we strive to ensure our products are accessible to our international customers. For specific shipping details, including delivery times and costs, please check our website or contact our support team.
                   </p>
                </main>
                </section>
            </div>
                </div>
            </main>
            <footer>
                <header>
                    <div>
                        <h1>foodspring</h1>
                        <section>
                        <span> <ion-icon name="logo-instagram"></ion-icon> </span>
                        <span> <ion-icon name="logo-youtube"></ion-icon> </span>
                        </section>
                    </div>
                    <div className="lists">
                        <ul>
                            <li>About Us</li>
                            <li>Online Shop</li>
                            <li>Blog</li>
                        </ul>
                        <ul>
                            <li>Support</li>
                            <li>Shipping Information</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                </header>
                <h5> &#169; 2024 Foodspring. All rights reserved.</h5>
            </footer>
        </div>
    )
}

export default HomeScreen;