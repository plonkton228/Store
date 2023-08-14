import React from "react";
import  ReactDOM  from "react-dom/client";
import App from './app/App';
import { BrowserRouter } from "react-router-dom";
import "app/styles/reset.scss";
import ThemeProvider from "app/providers/Themes/ThemeProvider";




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<>
<ThemeProvider>
 <BrowserRouter>
   <App/>
 </BrowserRouter>
</ThemeProvider>
</>)