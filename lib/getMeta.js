export const getMeta = (result, slug) => {
  const meta = {
    metadataBase: new URL(`${process.env.DOMAIN}`),
    title: result?.json?.title,
    description: result?.json?.description,
    alternates: {
      canonical: `${process.env.DOMAIN}${slug}`,
    },
    openGraph: {
      title: result?.json?.title,
      description: result?.json?.description,
      url: `${process.env.DOMAIN}${slug}`,
      siteName: result?.json?.og_site_name,
      images: [],
      locale: result?.json?.og_locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: result?.json?.title,
      description: result?.json?.description,
      creator: 'honghaotravel',
      images: [],
    },
  }
  if (result?.json?.og_image && result.json.og_image.length > 0) {
    meta.openGraph.images.push({
      url:
        result.json.og_image[0]?.url ||
        'https://cms-honghao.okhub-tech.com/wp-content/uploads/Group-1000004214-2-1.jpg',
      width: result.json.og_image[0]?.width,
      height: result.json.og_image[0]?.height,
    })
    meta.twitter.images.push({
      url:
        result.json.og_image[0]?.url ||
        'https://cms-honghao.okhub-tech.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    })
  } else {
    meta.openGraph.images.push({
      url: 'https://cms-honghao.okhub-tech.com/wp-content/uploads/Group-1000004214-2-1.jpg',
      width: 300,
      height: 300,
    })
    meta.twitter.images.push({
      url: 'https://cms-honghao.okhub-tech.com/wp-content/uploads/Group-1000004214-2-1.jpg',
    })
  }

  console.log('meta', meta)

  return meta
}
