'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { Children, ReactNode, useEffect, useState } from 'react';
interface Props {
    children: ReactNode;
}
const Slider = ({ children }: Props) => {
    const parentSlider = Children.count(children);
    const dots = [];
    for (let index = 0; index < parentSlider; index++) dots.push(index);
    const [active, setActive] = useState(0);
    const changeSlider = (num: 1 | -1) => () => {
        setActive((prev) => prev + num);
    };
    useEffect(() => {
        const timeID = setInterval(
            () => setActive((pre) => (pre === parentSlider - 1 ? 0 : pre + 1)),
            5000
        );
        return () => {
            clearInterval(timeID);
        };
    }, []);
    return (
        <div>
            <div className='overflow-hidden relative'>
                <div
                    style={{ transform: `translateX(-${active * 100}%)` }}
                    className='flex aspect-[16/6] *:flex-shrink-0 transition-all'
                >
                    {children}
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-1 sm:gap-3'>
                    {dots.map((item) => (
                        <div
                            style={{ background: active === item ? '#1E5E9F' : '' }}
                            key={item}
                            className='size-2 sm:size-3 bg-gray-300 rounded-full'
                        ></div>
                    ))}
                </div>
                {parentSlider > 1 && (
                    <div className='text-white *:flex *:items-center *:justify-center *:cursor-pointer select-none'>
                        {active !== 0 && (
                            <div
                                onClick={changeSlider(-1)}
                                className='absolute group top-0 bottom-0 left-0 px-2 sm:px-6 bg-gradient-to-r to-transparent from-black/40'
                            >
                                <ArrowLeft className='size-5 sm:size-6 group-hover:-translate-x-2 transition-all' />
                            </div>
                        )}
                        {active !== parentSlider - 1 && (
                            <div
                                onClick={changeSlider(1)}
                                className='absolute group top-0 bottom-0 right-0 px-2 sm:px-6 bg-gradient-to-r from-transparent to-black/40'
                            >
                                <ArrowRight className='size-5 sm:size-6 group-hover:translate-x-2 transition-all' />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
