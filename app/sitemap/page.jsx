import SitemapLink from '@/components/sitemap/SitemapLink'

export default function Sitemap() {
  return (
    <main className='kKao4-container pt-[6rem]'>
      <h2 className='mb-4'>Hong Hao Travel</h2>
      <ul className='grid grid-cols-3 gap-3 mb-4'>
        <li>
          <SitemapLink href='/'>Homepage</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/about-us'>About us</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/tours'>All tours</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/destinations'>All destinations</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/faq'>FAQ</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/contact-us'>Contact us</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/blog'>All blogs</SitemapLink>
        </li>
        <li>
          <SitemapLink href='/activity'>Activity</SitemapLink>
        </li>
      </ul>
      <h2>Tours</h2>
      <h2>Blogs</h2>
    </main>
  )
}
