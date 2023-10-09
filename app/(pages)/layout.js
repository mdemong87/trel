import Footer from "@/componnent/pages/Footer";
import Header from "@/componnent/pages/Header";

export default function layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
