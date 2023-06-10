import Link from 'next/link'

import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Link href="">
            <h1>ddPn08</h1>
          </Link>
        </div>
        <nav>
          <ul className={styles['nav-list']}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/timeline">Timeline</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
