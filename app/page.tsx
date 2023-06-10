'use client'

import styles from './page.module.scss'

import IconGithub from '~icons/thirdparty/github'
import IconKoFi from '~icons/thirdparty/ko-fi'
import IconTwitter from '~icons/thirdparty/twitter'
import IconTwemojiBread from '~icons/twemoji/bread'
import IconTwemojiEnvelope from '~icons/twemoji/envelope'
import IconVscodeJava from '~icons/vscode-icons/file-type-java'
import IconVscodeJavascript from '~icons/vscode-icons/file-type-js-official'
import IconVscodeKotlin from '~icons/vscode-icons/file-type-kotlin'
import IconVscodePython from '~icons/vscode-icons/file-type-python'
import IconVscodeTypescript from '~icons/vscode-icons/file-type-typescript-official'

const LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/ddpn08',
    icon: <IconTwitter />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ddPn08',
    icon: <IconGithub />,
  },
  {
    name: 'Email',
    href: 'mailto:contact@ddpn.world',
    icon: <IconTwemojiEnvelope />,
  },
  {
    name: 'Ko-fi',
    href: 'https://ko-fi.com/ddpn08',
    icon: <IconKoFi />,
  },
]

const Links: React.FC = () => {
  return (
    <div className={styles.links}>
      {LINKS.map((link, i) => (
        <div key={i}>
          <div className={styles['links-icon']}>{link.icon}</div>
          <div className={styles['links-title']}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

const LANGUAGES = [
  {
    name: 'TypeScript',
    icon: <IconVscodeTypescript />,
  },
  {
    name: 'JavaScript',
    icon: <IconVscodeJavascript />,
  },
  {
    name: 'Python',
    icon: <IconVscodePython />,
  },
  {
    name: 'Java',
    icon: <IconVscodeJava />,
  },
  {
    name: 'Kotlin',
    icon: <IconVscodeKotlin />,
  },
]

const Languages: React.FC = () => {
  return (
    <div className={styles.languages}>
      {LANGUAGES.map((language, i) => (
        <div key={i}>
          <div>{language.icon}</div>
          <div>{language.name}</div>
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>だれですか？</h1>
      <p>
        だだっこぱんだ
        <span>
          <IconTwemojiBread />
        </span>
        です 。 日々ピアノを叩く技術系草食動物です。マイブームはMK8DXです。
      </p>
      <Links />
      <h1>よく使う言語</h1>
      <Languages />
    </div>
  )
}

export default Home

export const runtime = 'edge'
