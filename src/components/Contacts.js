import gitHubImg from "../images/contacts/github.png";
import emailImg from "../images/contacts/email.png";
import telegramImg from "../images/contacts/telegram.png";
import whatsappImg from "../images/contacts/whatsapp.png";
import facebookImg from "../images/contacts/facebook.png";

export default function Contacts() {
    return (
        <section
            className="contacts"
            id="contacts"
        >
            <header className="section_header">Contact me</header>

            <main>
                <div className="contacts_item">
                    <a href="https://github.com/AAlexanderV">
                        <img
                            src={gitHubImg}
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://github.com/AAlexanderV">
                        github.com/AAlexanderV
                    </a>
                </div>

                <div className="contacts_item">
                    <a href="mailto:asaulovalex@gmail.com">
                        <img
                            src={emailImg}
                            alt="E-mail"
                        />
                    </a>
                    <a href="mailto:asaulovalex@gmail.com">
                        asaulovalex@gmail.com
                    </a>
                </div>

                <div className="contacts_item">
                    <a href="https://telegram.me/alexander_asaulov">
                        <img
                            src={telegramImg}
                            alt="Telegram"
                        />
                    </a>
                    <a href="https://telegram.me/alexander_asaulov">
                        @alexander_asaulov
                    </a>
                </div>

                <div className="contacts_item">
                    <a href="tel:+380932403843">
                        <img
                            src={whatsappImg}
                            alt="Phone"
                        />
                    </a>
                    <a href="tel:+380932403843">+38 (093) 240 38 43</a>
                </div>

                <div className="contacts_item">
                    <a href="https://www.facebook.com/alexander.asaulov/">
                        <img
                            src={facebookImg}
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://www.facebook.com/alexander.asaulov/">
                        facebook.com/alexander.asaulov
                    </a>
                </div>
            </main>
        </section>
    );
}
