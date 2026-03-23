import { motion } from 'framer-motion';
import './contact.scss';

function Contact() {
    
    const DURATION = 0.35;
    const STAGGER = 0.01;
    const EMAIL = "ian.shinlee@gmail.com";

    return (
        <div className="sec-container contact-container" id="contact">
            <div className="contact-desc">
                <h3><span className="highlight">함께 일할</span> 웹퍼블리셔를 찾고 계신가요?</h3>
                <p>제게 궁금한 점이 있으시다면 연락해 주세요 :)<br/>빠르게 답장 드리겠습니다!</p>
                <motion.a href="mailto:ian.shinlee@gmail.com"
                    initial="initial"
                    whileHover="hovered"
                    className="contact-link">
                    <span className='sr-only'>ian.shinlee@gmail.com으로 메일 보내기</span>
                    <div aria-hidden="true">
                        {EMAIL.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hovered: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            key={i}
                        >
                            {l}
                        </motion.span>
                        ))}
                    </div>
                    <div aria-hidden="true" className="cover">
                        {EMAIL.split("").map((l, i) => (
                            <motion.span
                                variants={{
                                    initial: {
                                        y: "100%",
                                    },
                                    hovered: {
                                        y: "0px",
                                    },
                                }}
                                transition={{
                                    duration: DURATION,
                                    ease: "easeInOut",
                                    delay: STAGGER * i,
                                }}
                                key={i}
                            >
                                {l}
                            </motion.span>
                        ))}
                    </div>
                </motion.a>
            </div>
        </div>
    );
}

export default Contact;
