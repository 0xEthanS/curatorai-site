import Header from "@/components/top-level/marketing-header";
import Footer from "@/components/legacy/footer";




export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}