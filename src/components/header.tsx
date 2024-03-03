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
        <section className='backdrop-blur-md border-b sticky top-0 z-50 bg-white/70'>
            <div className='max-w-screen-xl mx-auto py-4 flex justify-between items-center'>
                <div>
                    <Link href='/'>
                        <Logo />
                    </Link>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-8 *:font-semibold hover:*:text-[#055398] *:transition-all'>
                        {dataNavigate.map((nav) => (
                            <Link href={nav.href} key={nav.id}>
                                {nav.name}
                            </Link>
                        ))}
                    </div>
                    <Link href='/login'>
                        <Button
                            className='border-gray-50/2 ml-10 bg-[#055398] hover:bg-[#055398]/90 font-semibold'
                            size='sm'
                        >
                            Đăng nhập
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default header;
