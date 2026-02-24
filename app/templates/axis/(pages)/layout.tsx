import { Inter } from "next/font/google";
import "./index.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"],
});

export default function NotioTemplateLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className={`${inter.variable} bg-background font-light w-full`}>
            {children}
        </body>
    );
}