import { motion } from 'framer-motion';
import Work from '../../atoms/Work/Work';
import './works.scss';

function Works({works}) {

    return (
        <div className="sec-container works-container" id="works">
            <h2 className="sec-title works-title">Work Experience</h2>
            <ul className="works-list">
                {works.map((work, i) => (
                    <motion.li
                        className="work"
                        key={work.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                        }}
                    >
                        <Work {...work} />
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}

export default Works;
