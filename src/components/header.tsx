import React from 'react';
import { Button } from './ui/button';
import Logo from './logo';
import Link from 'next/link';
interface Props {}
const header = ({}: Props) => {
    return (
        <section className='backdrop-blur-sm border-b'>
            <div className='max-w-screen-xl mx-auto py-4 flex justify-between items-center'>
                <div>
                    <Logo />
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-8 *:font-semibold hover:*:text-rose-500 *:transition-all'>
                        <Link href='/'>Mua vé</Link>
                        <Link href='/'>Lịch chiếu</Link>
                    </div>
                    <Button className='border-gray-50/2 ml-10' size={'sm'}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default header;
