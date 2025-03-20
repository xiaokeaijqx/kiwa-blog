import  Header from "@/components/shared/header"
import  Footer from "@/components/shared/footer"

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"flex flex-col "}>
            <Header/>
            <main  className={"h-auto"}>{children}</main>
            <Footer/>
        </div>
    );


}