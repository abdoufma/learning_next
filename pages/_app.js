import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import "../styles/global.css"
//@ts-check
export default function App({Component, pageProps}){
    const router = useRouter();
    return (<>
            <header>
                <h1>Our Site</h1>
                <div className="header-nav">
                    <ul>
                        <li> <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link> </li>
                        <li> <Link className={router.pathname == "/blog" ? "active" : ""}href="/blog ">Blog</Link> </li>
                        <li> <Link className={router.pathname == "/about" ? "active" : ""}href="/about ">About</Link> </li>
                    </ul>
                </div>
            </header>
            <Component {...pageProps}/>
            <footer>Footer</footer>
        </>)
}