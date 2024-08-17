import {cn} from '@/lib/utils'

export default function SectionHeading({h5, h2, darkTheme}) {
  return (
    <>
      <h5
        className={cn('mb-3 h5', {
          'text-greyscale-0 opacity-40': darkTheme,
        })}
      >
        {h5}
      </h5>
      <h2
        className={cn('h2 xmd:text-[2rem]', {
          'text-greyscale-0': darkTheme,
        })}
      >
        {h2}
      </h2>
    </>
  )
}
