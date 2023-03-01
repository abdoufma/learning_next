import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import "../styles/global.css"
//@ts-check
export default function App({Component, pageProps}){
    return (<>
            <Head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <header>
                <h1>Our Site</h1>
                <HeaderNav/>
            </header>
            <Component {...pageProps}/>
            <footer>Footer</footer>
        </>)
}

const HeaderNav = () => {
    const router = useRouter();
    return <nav className="header-nav">
        <button onClick={() => router.push("/blog")}>go to blog</button>
            <ul>
                <li> <Link prefetch={false} className={router.pathname == "/" ? "active" : ""} href="/">Home</Link> </li>
                <li> <Link prefetch={false} className={router.pathname == "/blog" ? "active" : ""}href="/blog ">Blog</Link> </li>
                <li> <Link prefetch={false} className={router.pathname == "/about" ? "active" : ""}href="/about ">About</Link> </li>
            </ul>
          </nav>
}