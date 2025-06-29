import Head from "next/head";
import userInfo from "../../data/usersInfo.json";

export default function DomHead({ pageName = "Home Page" }) {
    return (
        <Head>
            <title>whereisfarukk - {pageName} </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="whereisfarukk" />
            <meta name="description" content="Portfolio of Omar Faruk (whereisfarukk) — A full-stack developer passionate about solving real-world problems." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://whereisfarukk.github.io" />
            <meta property="og:title" content="whereisfarukk" />
            <meta property="og:description" content="Portfolio of Omar Faruk (whereisfarukk) — A full-stack developer passionate about solving real-world problems." />
            <meta property="og:image" content="https://github.com/whereisfarukk.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content="whereisfarukk" />
            <meta property="twitter:description" content="Portfolio of Omar Faruk (whereisfarukk) — A full-stack developer passionate about solving real-world problems." />
            <meta property="twitter:image" content="https://github.com/whereisfarukk.png" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    );
}
