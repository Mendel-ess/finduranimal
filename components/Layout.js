import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <div>{children}</div>
        </div>
    )
}

export default Layout
