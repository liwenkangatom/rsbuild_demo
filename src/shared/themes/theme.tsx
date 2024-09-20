import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
type ThemeType = 'dark' | 'light' | 'third';

type ThemeContextProps = {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
};
const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setSelectedTheme] = useState<ThemeType>('light');
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    const updateTheme = () => {
      const storedTheme = localStorage.getItem('selectedTheme');
      const setTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
        setSelectedTheme(theme);
      };

      if (storedTheme !== null) {
        setTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setTheme('dark');
            break;
          case prefersLight.matches:
            setTheme('light');
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener('change', updateTheme);
    prefersLight.addEventListener('change', updateTheme);

    return () => {
      prefersDark.removeEventListener('change', updateTheme);
      prefersLight.removeEventListener('change', updateTheme);
    };
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};
