import React from 'react';
import { Button } from './ui/button';
import Logo from './logo';
import Link from 'next/link';
interface Props {}
const dataNavigate = [
    {
        id: 1,
        name: 'Mua vé',
        href: '/'
    },
    {
        id: 2,
        name: 'Lịch chiếu',
        href: '/'
    }
];
const header = ({}: Props) => {
    return (
        <section className='backdrop-blur-md border-b sticky top-0 z-50 bg-white'>
            <div className='max-w-screen-xl mx-auto py-4 flex justify-between items-center'>
                <div>
                    <Link href='/'>
                        <Logo />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-8 *:font-semibold hover:*:text-[#055398] *:transition-all'>
                        {dataNavigate.map((nav) => (
                            <Link href={nav.href} key={nav.id} className='hidden'>
                                {nav.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link
                            href='/login'
                            className='font-semibold hover:text-[#055398] hover:underline'
                        >
                            Đăng ký
                        </Link>
                        <div className='text-gray-300'>|</div>
                        <Link
                            href='/login'
                            className='font-semibold hover:text-[#055398] hover:underline'
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default header;
