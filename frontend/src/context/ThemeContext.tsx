import react, {createContext, useState} from 'react'

interface ContextProps {
    readonly darkMode: boolean;
    readonly toggleDarkMode: () => void;
  }

  const DarkModeContext = createContext<ContextProps>({darkMode:false,toggleDarkMode:()=>{}});

function DarkModeProvider(props:any){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    )
}

export {DarkModeContext, DarkModeProvider}