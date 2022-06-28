import Link from 'next/link'

const TopBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="../pages/index.js">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="../pages/about.js">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="../pages/searchpets.js">
                        <a>Search your pet</a>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default TopBar