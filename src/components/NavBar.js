import Link from 'next/link'

export default function() {
    return (
        <nav>
            <ul>
                <li key="about"><Link href="/about">About</Link></li>
            </ul>
        </nav>
    )
}