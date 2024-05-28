export default async function sitemap() {
  return [
    {url: process.env.DOMAIN, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/about-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/tours`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/destinations`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/faq`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/contact-us`,
      lastModified: new Date(),
      priority: 1,
    },
    {url: `${process.env.DOMAIN}/blog`, lastModified: new Date(), priority: 1},
    {
      url: `${process.env.DOMAIN}/activity`,
      lastModified: new Date(),
      priority: 1,
    },
    // TODO: all tours, all blogs
  ]
}
