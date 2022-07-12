import { createContext, useState } from 'react'

export const themes = {
    light: {
        color: '#888888',
        color2: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#bbbbbb',
        color2: '#ffffff',
        background: '#333333'
    }
}

export const glassEffect = (color1,color2) => {
    return `\
    box-shadow: ${color2}3f 0px 14px 28px, ${color2}38 0px 10px 10px;\
    background: ${color1}33;\
    border-radius: 16px;\
    backdrop-filter: blur(5px);\
    -webkit-backdrop-filter: blur(5px);\
    border: 1px solid ${color2}4c;`
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme , setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}



