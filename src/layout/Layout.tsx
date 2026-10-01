import { ReactElement } from 'react';
import { Cta, Footer, Navbar, WhatsAppButton } from '@/components';

interface LayoutProps {
    children: ReactElement
}
export function Layout(props: LayoutProps) {
    const { children } = props;

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <main>
                {children}
            </main>
            <Cta />
            <Footer />
            {/* <WhatsAppButton /> */}
        </div>
    );
}
