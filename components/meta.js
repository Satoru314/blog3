import Head from 'next/head'
import Link from 'next/link'
import { siteMeta } from '@/lib/constants'
import { useRouter } from 'next/router'
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pagetitle, pageDesc }) {
    const title = pagetitle ? `${pagetitle} | ${siteTitle}` : siteTitle

    const desc = pageDesc ?? siteDesc
    const url = `${siteUrl}${useRouter().asPath}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}/>

            <meta name="description" content={desc}/>
            <meta property="og:description" content={desc}/>

            <Link rel="canonical" href={url} />
            <meta property="og:url" content={url}/>

        </Head>

    )
}