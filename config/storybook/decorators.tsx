import { Theme, ThemeContxet } from "app/providers/Themes/lib/ThemeContext"
import { useState } from "react"

export const ThemeDecorator: React.FC = (component: React.ReactNode) => {
   const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
   return( <ThemeContxet.Provider value={{theme, setTheme}}>
     {component}
   </ThemeContxet.Provider>)
}