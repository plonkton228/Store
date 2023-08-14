import { createContext } from "react";

export const LOCAL_STORAGE_KEY_THEME = 'theme'
export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export interface ContextType {
    theme?: Theme;
    setTheme?: (theme : Theme) => void
}

export const ThemeContxet = createContext<ContextType>({})

