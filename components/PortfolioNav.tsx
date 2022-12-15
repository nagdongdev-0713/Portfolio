import Link from 'next/link'
import React from 'react'

export default function PortfolioNav() {
    return (
        <div className="portfolio__header">
            <Link href='/'>
                <i className="bi bi-arrow-left portfolio__icon"></i>
            </Link>
            <span>README.md</span>
            <a href="https://github.com/k1k2brz" className="bi bi-github portfolio__icon"
                target="_blank" rel="noreferrer noopener"></a>
        </div>
    )
}
