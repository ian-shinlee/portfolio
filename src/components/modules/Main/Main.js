import { motion } from 'framer-motion';
import './main.scss';
import * as Icon from "./icons";
import useScrambleText from './useScrambleText';

function Main() {

    const SKILLS = [
        { name: 'HTML5', Component: Icon.Html },
        { name: 'CSS3', Component: Icon.CSS },
        { name: 'SASS', Component: Icon.SASS },
        { name: 'Tailwind CSS', Component: Icon.Tailwind },
        { name: 'Bootstrap', Component: Icon.Bootstrap },
        { name: 'JavaScript', Component: Icon.JS },
        { name: 'jQuery', Component: Icon.Jquery },
        { name: 'React', Component: Icon.React },
        { name: 'NPM', Component: Icon.NPM },
        { name: 'Git', Component: Icon.Git },
    ];

    const commonMotionProps = {
        variants: {
            hidden: { opacity: 0, y: 40 },
            show: (i = 0) => ({ 
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: i * 0.08
                }
            })
        },
        initial: "hidden",
        whileInView: "show",
        viewport: { once: false, amount: 0.2 }
    };

    // 커스텀 훅 사용
    const { text: displayText, maskControls, getCharColor } = useScrambleText("LEE-SHIN,");

    return (
        <div className="main-container">
            <h1 className="sr-only">안녕하세요, 퍼블리셔 이신입니다.</h1>
            <div className="main-title-area" aria-hidden="true">
                <motion.div 
                    className="main-title" 
                    {...commonMotionProps}
                >
                    Hello
                </motion.div>
                <motion.div 
                    className="main-title" 
                    {...commonMotionProps}
                >
                    I am&nbsp;
                    <span className="reveal-wrap">
                        <span>
                            {displayText.split('').map((char, index) => (
                                <span key={index} style={{ color: getCharColor(char) }}>{char}</span>
                            ))}
                        </span>
                        <motion.span animate={maskControls} className="reveal-mask"></motion.span>
                    </span>
                    a Web Publisher
                </motion.div>
            </div>
            
            <div className="main-desc">
                <motion.p 
                    {...commonMotionProps}
                >
                    함께 만드는 과정에서 더 나은 결과가 나온다고 믿는 퍼블리셔 이신입니다.<br/>
                    협업과 소통을 중요하게 생각하며, 팀 안에서 자연스럽게 녹아드는 것을 지향합니다.
                </motion.p>
                <div className="main-skills">
                    <motion.h2 
                        {...commonMotionProps}
                    >
                        사용 기술스택
                    </motion.h2>
                    <ul>
                        {SKILLS.map((skill, i) => (
                            <motion.li 
                                key={i}
                                custom={i}
                                {...commonMotionProps}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: (i % 2 === 0 ? 1 : -1) * ((i * 3) % 5 + 2),
                                    zIndex: 2,
                                    transition: { type: "spring", stiffness: 300 } }}
                            >
                                <span className="sr-only">{skill.name}</span>
                                <skill.Component />
                            </motion.li>
                        ))}
                    </ul>
                    <motion.h2 
                        {...commonMotionProps}
                    >
                        공부중인 기술스택
                    </motion.h2>
                    <ul>
                        <motion.li 
                            {...commonMotionProps}
                            whileHover={{ scale: 1.1, rotate: -3, zIndex: 10, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <span className="sr-only">Vue</span>
                            <Icon.Vue />
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Main;
