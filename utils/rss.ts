import * as entities from 'entities'
import { XMLParser } from 'fast-xml-parser'

const parser = new XMLParser()

const ZENN_FEED_URL = 'https://zenn.dev/ddpn08/feed?all=1'
const NOTE_FEED_URL = 'https://note.com/ddpn08/rss'

const stripHtml = (str: string) => {
    str = str.replace(
        /([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm,
        '$1\n$3',
    )
    str = str.replace(/<(?:.|\n)*?>/gm, '')
    return str
}

export const getSnippet = (str: string) => {
    return entities.decodeHTML(stripHtml(str)).trim()
}

const fetchRss = async (url: string) => {
    const res = await fetch(url)
    const rss = parser.parse(await res.text())
    return rss.rss.channel
}

export const fetchRssList = async () => {
    const zenn = await fetchRss(ZENN_FEED_URL)
    const note = await fetchRss(NOTE_FEED_URL)
    const rss = {
        zenn,
        note,
    } as const
    return rss
}
