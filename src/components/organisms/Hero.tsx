import { CODE_FILE_NAME, CODE_SAMPLE } from '../../config/codeSample'
import { COPY, OS_LABEL, SECTION_ID, toAnchor } from '../../config/site'
import { detectOperatingSystem } from '../../utils/detectOperatingSystem'
import { ButtonLink } from '../atoms/ButtonLink'
import { Icon } from '../atoms/Icon'
import { Section } from '../atoms/Section'
import { SpaceBackdrop } from '../atoms/SpaceBackdrop'
import { CodeWindow } from '../molecules/CodeWindow'

const BUTTON_ICON_SIZE = 18
const downloadsAnchor = toAnchor(SECTION_ID.downloads)

export const Hero = () => {
  const systemLabel = OS_LABEL[detectOperatingSystem()]

  return (
    <Section id={SECTION_ID.top} width="narrow" className="overflow-hidden pb-28 pt-40" containerClassName="text-center">
      <SpaceBackdrop />
      <p className="mb-5 font-mono text-sm tracking-wide text-cyan">{COPY.hero.eyebrow}</p>
      <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        {COPY.hero.titleLead} <span className="text-gradient">{COPY.hero.titleAccent}</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{COPY.hero.description}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href={downloadsAnchor}>
          <Icon name="download" size={BUTTON_ICON_SIZE} />
          {COPY.hero.downloadPrefix} {systemLabel}
        </ButtonLink>
        <ButtonLink href={downloadsAnchor} variant="ghost">
          {COPY.hero.allVersions}
        </ButtonLink>
      </div>
      <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-mist/70">
        {COPY.hero.badges.map((badge) => (
          <li key={badge}>{badge}</li>
        ))}
      </ul>
      <CodeWindow fileName={CODE_FILE_NAME} lines={CODE_SAMPLE} className="mt-16 text-left" />
    </Section>
  )
}
