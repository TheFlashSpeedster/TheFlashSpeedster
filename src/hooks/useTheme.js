import { useState, useEffect, useCallback } from 'react';
import { createLightning } from '../utils/lightning';

const THEME_KEY = 'speedster-theme';

export function useTheme() {
    const getInitialTheme = () => {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved === 'light' || saved === 'dark') return saved;
        } catch (e) {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [theme, setThemeState] = useState(getInitialTheme);

    const setTheme = useCallback((newTheme) => {
        setThemeState(newTheme);
        try {
            localStorage.setItem(THEME_KEY, newTheme);
        } catch (e) {}
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.style.colorScheme = newTheme;
    }, []);

    const toggleTheme = useCallback((e) => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);

        // Micro-lightning spark effect on trigger
        if (e && e.currentTarget) {
            const rect = e.currentTarget.getBoundingClientRect();
            createLightning(rect.left + rect.width / 2, rect.top + rect.height / 2);
        } else {
            const toggleBtn = document.querySelector('.desktop-theme-toggle') || document.querySelector('.mobile-theme-toggle');
            if (toggleBtn) {
                const rect = toggleBtn.getBoundingClientRect();
                createLightning(rect.left + rect.width / 2, rect.top + rect.height / 2);
            }
        }
    }, [theme, setTheme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;

        // Global 'T' shortcut listener
        const handleKeyDown = (e) => {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (
                activeTag === 'input' ||
                activeTag === 'textarea' ||
                (document.activeElement && document.activeElement.isContentEditable)
            ) {
                return;
            }

            if (e.metaKey || e.ctrlKey || e.altKey) {
                return;
            }

            if (e.key === 't' || e.key === 'T') {
                e.preventDefault();
                toggleTheme();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // System theme preference listener
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = (e) => {
            try {
                if (!localStorage.getItem(THEME_KEY)) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            } catch (err) {}
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleSystemChange);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleSystemChange);
            }
        };
    }, [theme, toggleTheme, setTheme]);

    return { theme, toggleTheme, setTheme };
}
