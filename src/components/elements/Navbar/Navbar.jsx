import Image from 'next/image'
import React from 'react'
import NavigationLinks from './NavigationLinks/NavigationLinks'
import NavigationButtons from './NavigationButtons/NavigationButtons'

const Navbar = () => {
  return (
    <div className="nav">
      <Image src={"/images/logo.png"} width={207} height={50} alt="Logo" className='nav__logo' priority={true}/>
      <NavigationLinks />
      <NavigationButtons />
    </div>
  );
}

export default Navbar