import { useContext } from "react"
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContxet } from "app/providers/Themes/ThemeContext"
interface hookRerturn {
    theme : Theme,
    toggleTheme : (theme : Theme) => void
}
const useTheme = () : hookRerturn => {
    const {theme, setTheme} = useContext(ThemeContxet)
    function toggleTheme(theme : Theme) {
         const newTheme = theme === Theme.DARK?  Theme.LIGHT : Theme.DARK;
         setTheme(newTheme);
         localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
    }

    return {
        theme, 
        toggleTheme
    }
}

export default useTheme