import Header from '~/components/header';
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className='bg-[var(--background)] max-h-screen overflow-auto'>
            <Header />
            <section>{children}</section>
        </section>
    );
}
