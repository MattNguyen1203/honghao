import SitemapLink from '@/components/sitemap/SitemapLink'
import getData from '@/lib/getData'

export default async function Sitemap() {
  const getListCate = getData(
    `wp-json/okhub/v1/get-list-cat-and-first-posts?per_page=0`,
  )

  const getListTourCate = getData(
    `wp-json/okhub/v1/get-list-tax-by-slug?slug=type-of-tour&page=1&per_page=100`,
  )

  const [listCate, listTourCate] = await Promise.all([
    getListCate,
    getListTourCate,
  ])
  return (
    <main className='pt-[6rem] bg-green-normal min-h-screen'>
      <div className='container mt-[5rem] text-greyscale-0'>
        <h2 className='mb-8 '>Hong Hao Travel</h2>
        <ul className='grid grid-cols-3 gap-3 mb-[3rem]'>
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
        <h2 className='mb-8'>Tours</h2>
        <ul className='grid grid-cols-3 gap-3 mb-[3rem]'>
          {listTourCate?.terms?.map((item, index) => (
            <li key={index}>
              <SitemapLink href={`/tours?device=${item?.slug}`}>
                {item?.name}
              </SitemapLink>
            </li>
          ))}
        </ul>
        <h2 className='mb-8'>Blogs</h2>
        <ul className='grid grid-cols-3 gap-3 mb-[3rem]'>
          {listCate?.categories?.map((item, index) => (
            <li key={index}>
              <SitemapLink href={`/blog/${item?.slug}`}>
                {item?.name}
              </SitemapLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
