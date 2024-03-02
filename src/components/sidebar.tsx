import React from 'react';
import Logo from './logo';
import Menu from './sidebar/menu';

const Sidebar = () => {
    return (
        <section className='sticky top-0'>
            <div className='min-w-80 max-w-80 min-h-screen max-h-screen border-r p-4'>
                <Logo />
                <Menu />
            </div>
        </section>
    );
};

export default Sidebar;
