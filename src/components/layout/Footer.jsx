import SocialNetwork from "../SocialNetwork.jsx";

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="footer-title">Ընկերություն</h5>
                        <ul className="footer-list">
                            <li className="list-item">
                                <a href="/online-shop">Օնլայն խանութ</a>
                            </li>
                            <li className="list-item">
                                <a href="/production">արտադրություն</a>
                            </li>
                            <li className="list-item">
                                <a href="/co-workers">գործընկերներ</a>
                            </li>
                            <li className="list-item">
                                <a href="/job">աշխատանք</a>
                            </li>
                            <li className="list-item">
                                <a href="/blog">Բլոգ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="footer-title">ապրանքանիշեր</h5>
                        <ul className="footer-list">
                            <li className="list-item">
                                <a href="/bacon">bacon meatproducts</a>
                            </li>
                            <li className="list-item">
                                <a href="/doctor">doctor</a>
                            </li>
                            <li className="list-item">
                                <a href="/bacon-exclusive">bacon exclusive</a>
                            </li>
                            <li className="list-item">
                                <a href="/bacon-exclusive">bacon exclusive</a>
                            </li>
                            <li className="list-item">
                                <a href="/tank">tank</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="footer-title">կապվել մեզ հետ</h5>
                        <ul className="footer-list">
                            <li className="list-item">
                                <a href="mailto:info@bacon.am">info@bacon.am</a>
                            </li>
                            <li className="list-item">
                                <p>
                                    <a href="tel:+ 374 10 25 00 01">
                                        + 374 10 25 00 01
                                    </a>
                                </p>
                                <p className="mt-15">
                                    <a href="tel:+ 374 10 25 00 01">
                                        + 374 10 25 20 20
                                    </a>
                                </p>
                            </li>
                            <li className="list-item">
                                9 abovyan highway, v. arzni, <br/> kotayk marz, ra
                            </li>
                        </ul>
                    </div>
                </div>
                <SocialNetwork/>
            </div>
            <p className="right-text">2023 bacon product LLC. all right reserved.</p>
        </div>
    </footer>
)

export default Footer;
