import Link from "next/link";
import styles from "./pages.module.css";

export default function SignUp() {
    return (
        <main className={styles.signUpWrp}>
            <div>
                <h1 className={styles.pagesheading}>Sign Up</h1>

                <form className={styles.form}>
                    <input type="text" placeholder="Frist Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </form>
                <span>Have An Account ? <Link href="/auth/signin">Sign In</Link></span>
            </div>
        </main>
    )
}
