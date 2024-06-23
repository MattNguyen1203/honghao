import getData from '@/lib/getData'
import OurTeamChild from './WrapperTeam'
import { GLOBAL_PAGE_ID } from '@/lib/constants'
const OurTeam = async ({ darkTheme, btnHome = false }) => {
  const dataAcf = await getData(`wp-json/acf/v3/pages/${GLOBAL_PAGE_ID}`)
  const dataTeam = dataAcf?.acf?.team
  return (<OurTeamChild dataTeam={dataTeam} darkTheme={darkTheme} btnHome={btnHome} />
  )
}

export default OurTeam