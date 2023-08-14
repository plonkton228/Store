import { useMemo, useState } from "react"
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContxet } from "./ThemeContext"
interface ProviderType {
    children : React.ReactNode
}

const ThemeProvider: React.FC<ProviderType> = ({children}) => {
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME)  as Theme || Theme.DARK;
  const [theme , setTheme] = useState<Theme>(defaultTheme);
  const defaultState = useMemo(()=> {
    return {
      theme,
      setTheme
    }
  }, [theme])
    return(<>
     <ThemeContxet.Provider value={defaultState}>
        {children}
     </ThemeContxet.Provider>
    </>)
}

export default ThemeProvider;