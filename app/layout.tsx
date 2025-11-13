import type { Metadata } from "next";
import { Montserrat, Open_Sans } from 'next/font/google';

import "./style.css";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
    title: "Trip Tonic Safaris",
    description: "Your Gateway to Wild Uganda",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${openSans.className} antiliased`}>
                {children}
            </body>
        </html>
    );
}
