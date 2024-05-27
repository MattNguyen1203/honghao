
import BlogDetail from "@/sections/blog-detail"
import getData from "@/lib/getData"

const page = async () => {
  const dataDetailPost = await getData(`wp-json/okhub/v1/get-post-detail-by-slug/tanzania-is-known-for-it-world-class-opportunities-for-big-game-spotting-and-stunning-national-parks-but-what-dont-you-know-about-this-wonderful-destination`)
  return <BlogDetail dataDetailPost={dataDetailPost[0]} />
}

export default page
