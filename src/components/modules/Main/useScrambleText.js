import { useState, useEffect, useCallback } from 'react';
import { useAnimation } from 'framer-motion';

// [커스텀 훅] 텍스트 스크램블 로직
const useScrambleText = (initialText) => {
    const [text, setText] = useState(initialText);
    const maskControls = useAnimation();

    // 내부적으로 사용되는 스크램블 함수
    const scramble = useCallback(async (targetText) => {
        const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄■□▪▫●○◆◇◈◊※†‡"; 
        const forcedChars = "★✦✧▒";
        const totalDuration = 1000;
        const intervalTime = 50;
        const steps = totalDuration / intervalTime;

        for (let i = 0; i <= steps; i++) {
            const progress = i / steps;
            const resolvedIndex = Math.floor(progress * targetText.length);
            
            const nextTextArr = targetText.split('').map((char, index) => {
                if (char === '-' || char === ',') return char;
                if (index < resolvedIndex) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            });

            const unresolvedIndices = nextTextArr.map((_, idx) => idx)
                .filter(idx => idx >= resolvedIndex && targetText[idx] !== '-' && targetText[idx] !== ',');

            if (unresolvedIndices.length >= 2) {
                const idx1 = Math.floor(Math.random() * unresolvedIndices.length);
                let idx2 = Math.floor(Math.random() * unresolvedIndices.length);
                while (idx1 === idx2) idx2 = Math.floor(Math.random() * unresolvedIndices.length);
                
                nextTextArr[unresolvedIndices[idx1]] = forcedChars[Math.floor(Math.random() * forcedChars.length)];
                nextTextArr[unresolvedIndices[idx2]] = forcedChars[Math.floor(Math.random() * forcedChars.length)];
            }

            setText(nextTextArr.join(''));
            await new Promise(resolve => setTimeout(resolve, intervalTime));
        }
        setText(targetText);
    }, []);

    // 애니메이션 시퀀스 루프
    useEffect(() => {
        let isMounted = true;

        const animateSequence = async () => {
            while (isMounted) {
                // 1. 초기 상태: 마스크가 덮여 있음
                await maskControls.set({ x: "0%" });
                setText(initialText);

                // 2. 마스크 걷힘
                maskControls.start({ 
                    x: "101%", 
                    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } 
                });
                
                // 3. 스크램블 실행
                await scramble(initialText);

                if (!isMounted) return;

                // 4. 대기
                await new Promise(resolve => setTimeout(resolve, 3000));
                if (!isMounted) return;

                // 5. 마스크 다시 덮힘
                await maskControls.set({ x: "-101%" });
                await maskControls.start({ 
                    x: "0%", 
                    transition: { duration: 0.4, ease: "easeInOut" } 
                });

                // 6. 다음 루프 전 짧은 대기
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        };

        animateSequence();
        return () => { isMounted = false; };
    }, [maskControls, scramble, initialText]);

    const getCharColor = (char) => {
        if (char === '★') return 'var(--color-cyan)';
        if (char === '▒') return 'var(--color-magenta)';
        if (char === '✦' || char === '✧') return 'var(--color-yellow)';
        return 'inherit';
    };

    return { text, maskControls, getCharColor };
};

export default useScrambleText;