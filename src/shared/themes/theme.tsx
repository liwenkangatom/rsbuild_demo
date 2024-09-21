import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
type ThemeType = 'dark' | 'light' | 'third';

type ThemeContextProps = {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
  setFollowSystem?: (follow: boolean) => void;
};
const ThemeContext = createContext<ThemeContextProps>({});
const getTheme = (stringTheme: string | null) => {
  switch (stringTheme) {
    case 'dark':
      return 'dark' as const;
    case 'light':
      return 'light' as const;
    case 'third':
      return 'third' as const;
    default:
      return 'light' as const;
  }
};
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [followSystem, setFollowSystem] = useState(true);

  const setDataTheme = useCallback((theme: ThemeType) => {
    document.documentElement.setAttribute('data-theme', theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
    const updateTheme = () => {
      const storedTheme = getTheme(
        localStorage.getItem('selectedTheme'),
      ) as ThemeType;
      if (followSystem) {
        switch (true) {
          case prefersDark.matches:
            setDataTheme('dark');
            break;
          case prefersLight.matches:
            setDataTheme('light');
            break;
          default:
            setDataTheme('light');
            break;
        }
      } else {
        setDataTheme(storedTheme);
      }
    };

    updateTheme();

    prefersDark.addEventListener('change', updateTheme);
    prefersLight.addEventListener('change', updateTheme);

    return () => {
      prefersDark.removeEventListener('change', updateTheme);
      prefersLight.removeEventListener('change', updateTheme);
    };
  }, [followSystem, setDataTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setDataTheme, setFollowSystem }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme, setFollowSystem } = useContext(ThemeContext);
  return { theme, setTheme, setFollowSystem };
};
