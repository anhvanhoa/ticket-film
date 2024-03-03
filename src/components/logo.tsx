import React from 'react';
import Image from 'next/image';

const logo = () => {
    return (
        <div className='w-24 select-none'>
            <Image src={'/logo.png'} alt='logo' width={1285} height={679} />
        </div>
    );
};

export default logo;
