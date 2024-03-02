import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandDialog
} from '~/components/ui/command';
import Link from 'next/link';
const dataMenu = [
    {
        id: 1,
        title: 'Dashboard',
        href: '/'
    },
    {
        id: 2,
        title: 'Referral',
        href: '/referral'
    },
    {
        id: 3,
        title: 'Short link',
        href: '/task/short-link'
    }
];
const Menu = () => {
    return (
        <div className='mt-1'>
            <Command className='bg-[var(--background)]'>
                <CommandList>
                    <CommandGroup>
                        {dataMenu.map((item) => (
                            <Link title={item.title} href={item.href} key={item.id}>
                                <p className='p-3 text-sm hover:bg-gray-50/10 rounded-md'>
                                    {item.title}
                                </p>
                            </Link>
                        ))}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    );
};

export default Menu;
