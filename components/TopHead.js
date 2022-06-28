import Head from 'next/head'

const TopHead = ({ children }) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <div>{children}</div>
        </div>
    )
}

export default TopHead
