import { useEffect, useState } from 'react';

export function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    console.log("toggleDarkMode");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark');
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}