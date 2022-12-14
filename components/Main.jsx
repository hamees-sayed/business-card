import linkedin from "../src/assets/linkedin-icon-btn.png";
import email from "../src/assets/email-icon-btn.png";

export default function Main() {
    return (
        <div className="main-section">
            <div className="details">
                <h1 className="name">Denji </h1>
                <p className="role">Devil Hunter</p>
                <p class="portfolio">devilhunter.chainsaw</p>
                <div className="btns">
                    <button>
                        <img src={email} />
                        Email
                    </button>
                    <button className="linkedin">
                        <div>
                            <img src={linkedin} />
                            LinkedIn
                        </div>
                    </button>
                </div>
            </div>
            <h2 className="topic">About</h2>
            <p className="topic-details">
                Denji is a young man who wants to live a simple life and to its
                fullest. He is childish, uneducated, and "Bonkers". Though he
                does kill devils, it's mostly because of his job, and for
                personal gain. He isn't fazed when his co-workers are killed.
            </p>
            <h2 className="topic">Interests</h2>
            <p className="topic-details">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Empathetic. Travel geek. Pop culture ninja. Jam and Bread
                fanatic.
            </p>
        </div>
    );
}
