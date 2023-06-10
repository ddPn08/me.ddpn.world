'use client'

import type { TimelineBlogItem, TimelineItem, TimelineType } from '@/utils/timeline'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'

import styles from './timeline.module.scss'

import IconNote from '~icons/thirdparty/note'
import IconZenn from '~icons/thirdparty/zenn'

const Blog: React.FC<{ blog: TimelineBlogItem }> = ({ blog }) => {
  return (
    <div className={styles.blog}>
      <a href={blog.link}>
        <div className={styles['blog-title']}>{blog.title}</div>
        <div className={styles['blog-bottom']}>
          {blog.blogType === 'note' && <IconNote />}
          {blog.blogType === 'zenn' && <IconZenn />}
          <div className={styles['blog-date']}>{dayjs(blog.date).format('YYYY-MM-DD')}</div>
        </div>
      </a>
    </div>
  )
}

const MonthItem: React.FC<{ items: TimelineBlogItem[] }> = ({ items }) => {
  const [more, setMore] = useState(false)
  const first = useMemo(() => items[0], [items])
  const rest = useMemo(() => items.slice(1), [items])
  return (
    <>
      {first && (
        <>
          <Blog blog={first} />
          {rest.length > 0 &&
            (more ? (
              rest.map((blog) => <Blog key={blog.link} blog={blog} />)
            ) : (
              <div className={styles['show-more']} onClick={() => setMore(true)}>
                Show more ({rest.length}) posts
              </div>
            ))}
        </>
      )}
    </>
  )
}

export const Timeline: React.FC<{ timeline: TimelineType }> = ({ timeline }) => {
  const sorted = useMemo(() => {
    const sorted: [string, [string, TimelineItem[]][]][] = []
    for (const year in timeline) {
      sorted.push([year, Object.entries(timeline[year]!).reverse()])
    }
    return sorted.reverse()
  }, [timeline])

  return (
    <div className={styles.container}>
      {sorted.map(([year, months]) => (
        <div key={year}>
          <div className={styles['year-text']}>{year}</div>
          <br />
          {months.map(([month, items]) => (
            <MonthItem key={month} items={items} />
          ))}
          <div className={styles.dot} />
        </div>
      ))}
    </div>
  )
}
