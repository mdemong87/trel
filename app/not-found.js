import Link from "next/link";

export default function notfound() {
    return (
        <div style={{ background: "var(--primaryColor)", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "40px" }}>404</h1>
                <h2 style={{ fontSize: "20px" }}>Page Not Found</h2>
                <br />
                <br />
                <Link style={{ color: "#fff" }} href={'/'}>Go to Home Page</Link>


            </div>
        </div >
    )
}
