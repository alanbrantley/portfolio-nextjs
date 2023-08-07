import {useTheme} from 'next-themes'
import {SunIcon} from '@heroicons/react/24/solid'
import {MoonIcon} from '@heroicons/react/24/solid'

const ThemeButton = () => {
    const {theme, setTheme} = useTheme()
    
    return (
        <button
        aria-label='Toggle Dark Mode'
        type='button'
        className='w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
        {theme === 'dark' ? (
            <SunIcon className='w-4 h-4 text-gray-800' />
        ) : (
            <MoonIcon className='w-4 h-4 text-gray-800' />
        )}
        </button>
    )
    }   

export default ThemeButton 
