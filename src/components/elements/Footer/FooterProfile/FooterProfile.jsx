import Image from 'next/image'
import React from 'react'
import { IconInstagram, IconMail, IconTelephone } from "@pages/components/modules/Icon/Icon";

const FooterProfile = () => {
  return (
    <div className='footer__profile'>
      <Image src={"/images/logo.png"} width={207} height={50} alt='logo'/>
      <p className='footer__profile-address'>
        Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
        Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
      </p>
      <div className='footer__profile-buttons'>
        <IconMail />
        <IconTelephone />
        <IconInstagram />
      </div>
    </div>
  );
}

export default FooterProfile