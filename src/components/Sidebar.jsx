import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiScreencastify, SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  
  const handleCloseSideBar = () => {
    if(activeMenu){
      setActiveMenu(false);
    }
  }

  const activeLink = `flex items-center 
                      gap-5 pl-4 pt-3 pb-2.5 
                      rounded-lg
                      text-white text-md m-2`;
  const normalLink = `flex items-center 
                      gap-5 pl-4 pt-3 pb-2.5 
                      rounded-lg text-md text-gray-700 
                      dark:text-gray-200 
                      dark:hover:text-black 
                      hover:bg-light-gray m-2`;

  return (
    <div className="ml-3 h-screen 
                    md:overflow-hidden 
                    overflow-auto 
                    md:hover:overflow-auto
                    pb-10">
      {activeMenu && (
      <>
        {/* Shoppy icon & Cross Buttton */}
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleCloseSideBar} // Shoppy icon link
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold
                       tracking-tight dark:text-white text-slate-900">
              <SiShopware /> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button' // Cross button
                    onClick={() => {setActiveMenu((prevActiveMenu) => !prevActiveMenu)}} // only activeMenu works fine too
                    className='text-xl 
                               rounded-full 
                               hover:bg-light-gray 
                               p-3 mt-4 block md:hidden'>
              <MdOutlineCancel /> 
            </button>
          </TooltipComponent>
        </div>

        {/* Options on the sidebar */}
        <div className='mt-10'>
          {links.map(item => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {/* Sub-Options on sidebar */}
              {item.links.map(link =>(
                // A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning".
                <NavLink to={`/${link.name}`}
                         key={link.name}
                         onClick={handleCloseSideBar} // what happens if we click on suboptions
                         style={({isActive}) => ({
                          backgroundColor: (isActive ? currentColor : '')
                         })}
                         className={({ isActive }) => 
                                        isActive ? activeLink:normalLink
                                   }
                >
                  {link.icon} 
                  <span className='capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  )
}

export default Sidebar