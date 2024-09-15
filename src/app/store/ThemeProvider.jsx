'use client'
import { createContext , useState, useEffect} from "react";


export const ThemeContext = createContext({});

export const ThemeProvider = ({children})=>{

    
    const [theme, setTheme] = useState(()=>{
      
      if(typeof window !== 'undefined'){
        
        return localStorage.getItem('theme') || 'dark';

      }  
      return 'dark'; // for server side rendering
    });

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);


      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };


      return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
      );
}
