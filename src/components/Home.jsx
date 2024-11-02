import Holding from "../assets/holding.png";
import Drinking from "../assets/drinking.jpg";
import WorkoutMale from "../assets/male-workout.jpg";
import Girl from "../assets/girl.jpg"

function HomeScreen() {
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
            </main>
        </div>
    )
}

export default HomeScreen;