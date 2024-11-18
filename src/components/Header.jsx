import {useState} from 'react';
import logo from '../assets/images/logo.svg';
import { NAVIGATION_LINKS } from '../constants';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleClick = (e, href) =>{
    e.preventDefault();
    const targetElem = document.querySelector(href);
    if(targetElem ){
      const offset = -85;
      const elemPosition = targetElem.getBoundingCleintRect().top;
      const offsetPosition = elemPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }
  return (
    <div>
      <nav className='fixed left-0 right-0 top-4 z-50'>
        {/* desktop menu */}
        <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-/30 bg-black/20
        py-3 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-6'>
            <a href='#' className='text-lg font-bold text-white'>
              <img src={logo} alt='logo' width={50} height={50}/>
            </a>
          </div>
          <div>
            <ul className='flex items-center gap-4'>
              {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                    className='text-sm hover:text-purple-400 ' href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                  >{item.label}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
        {/* mobile menu */}
        <div className='rounded-lg backdrop-blur-md lg:hidden'>
          <div className='flex items-center justify-between'>
            <a href='#'>
              <img src={logo} alt='logo' width={90} className='m-2'/>
            </a>
            <div className='flex items-center'>
            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <CloseRoundedIcon className='h-6 w-5 m-2' />
              ):(
                <MenuRoundedIcon className='h-6 w-5 m-2' />
              )}
            </button>
          </div>
          </div>
          {isMobileMenuOpen && (
            <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>{NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                className='text-sm hover:text-purple-400 ' href={item.href}
                onClick={(e) => handleClick(e, item.href)}
              >{item.label}</a></li>
            ))
          }</ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header