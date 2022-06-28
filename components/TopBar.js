import Link from 'next/link'

const TopBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="../pages/index.js" passHref>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="../pages/about.js" passHref>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="../pages/searchpets.js" passHref>
                        <a>Search your pet</a>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default TopBar