import Header from "@/components/top-level/marketing-header-light";
import Footer from "@/components/top-level/footer";




export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
}