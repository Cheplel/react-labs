function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className={`flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <p>Dark Mode: {darkMode ? 'On' : 'Off'}</p>
      
      <p>The mode is currently {darkMode ? 'dark' : 'light'}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  )
}

export default DarkModeToggle


