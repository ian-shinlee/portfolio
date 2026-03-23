import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        // 초기값 설정: 로컬스토리지 확인 -> 없으면 시스템 설정 확인
        const savedMode = localStorage.getItem('color_mode');
        if (savedMode) return savedMode === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const target = document.querySelector('.App') || document.body;
        const DARK_CLASS = 'is-dark';

        // 상태에 따라 클래스 추가/제거
        if (isDark) {
        target.classList.add(DARK_CLASS);
        } else {
        target.classList.remove(DARK_CLASS);
        }

        // 시스템 테마 변경 감지 이벤트
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
        if (!localStorage.getItem('color_mode')) {
            setIsDark(e.matches);
        }
        };

        mediaQueryList.addEventListener('change', handleChange);
        return () => mediaQueryList.removeEventListener('change', handleChange);
    }, [isDark]); // isDark가 바뀔 때마다 실행

    // 토글 함수
    const toggleTheme = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        localStorage.setItem('color_mode', newMode ? 'dark' : 'light');
    };

    return [isDark, toggleTheme];
};

export default useDarkMode;