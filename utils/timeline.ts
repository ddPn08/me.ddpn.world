import dayjs from 'dayjs'

import { fetchRssList, getSnippet } from './rss'

export type TimelineBlogItem = {
    type: 'blog'
    blogType: 'zenn' | 'note'
    title: string
    date: Date
    description: string
    link: string
}

export type TimelineItem = TimelineBlogItem

export type TimelineType = {
    [year: number]: {
        [month: number]: TimelineItem[]
    }
}

export const createTimeline = async () => {
    const timeline: TimelineType = {}
    const rss = await fetchRssList()

    for (const [category, items] of Object.entries(rss)) {
        for (const v of items.item) {
            const pubDate = v.pubDate || v.date
            if (!v.title || !v.description || !v.link || !pubDate) continue
            const date = dayjs(pubDate)
            const year = date.year()
            const month = date.month() + 1
            const snippet = getSnippet(v.description)

            if (!timeline[year]) timeline[year] = [] as any
            if (!timeline[year]![month]) timeline[year]![month] = []

            timeline[year]![month]!.push({
                type: 'blog',
                blogType: category as TimelineBlogItem['blogType'],
                title: v.title,
                date: date.toDate(),
                description: snippet,
                link: v.link,
            })
        }
    }

    for (const year in timeline) {
        for (const month in timeline[year]!) {
            timeline[year]![month]!.sort((a, b) => {
                if (a.date < b.date) return -1
                if (a.date > b.date) return 1
                return 0
            })
        }
    }

    return timeline
}
