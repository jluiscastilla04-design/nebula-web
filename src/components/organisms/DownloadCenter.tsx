import { useState } from 'react'
import { DOWNLOADS } from '../../config/downloads'
import { COPY, OPERATING_SYSTEMS, OS_LABEL, SECTION_ID } from '../../config/site'
import type { OperatingSystem } from '../../types'
import { cx } from '../../utils/cx'
import { detectOperatingSystem } from '../../utils/detectOperatingSystem'
import { GlassCard } from '../atoms/GlassCard'
import { Section } from '../atoms/Section'
import { SectionHeading } from '../atoms/SectionHeading'
import { DownloadOptionCard } from '../molecules/DownloadOptionCard'

const TAB_BASE = 'flex-1 border-b-2 py-4 text-sm font-medium transition-colors'
const TAB_ACTIVE = 'border-violet-glow bg-violet/10 text-silver'
const TAB_INACTIVE = 'border-transparent text-mist hover:text-silver'

export const DownloadCenter = () => {
  const [activeSystem, setActiveSystem] = useState<OperatingSystem>(detectOperatingSystem)

  return (
    <Section id={SECTION_ID.downloads} width="narrow" className="border-t border-silver/10">
      <SectionHeading title={COPY.downloads.title} description={COPY.downloads.description} className="mx-auto text-center" />
      <GlassCard className="mt-12 overflow-hidden">
        <div role="tablist" aria-label={COPY.downloads.tablistLabel} className="flex border-b border-silver/10">
          {OPERATING_SYSTEMS.map((system) => (
            <button
              key={system}
              type="button"
              role="tab"
              aria-selected={system === activeSystem}
              onClick={() => setActiveSystem(system)}
              className={cx(TAB_BASE, system === activeSystem ? TAB_ACTIVE : TAB_INACTIVE)}
            >
              {OS_LABEL[system]}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="grid gap-5 p-8 sm:grid-cols-2">
          {DOWNLOADS[activeSystem].map((option) => (
            <DownloadOptionCard key={option.title} option={option} />
          ))}
        </div>
      </GlassCard>
      <p className="mt-6 text-center font-mono text-xs text-mist/60">{COPY.downloads.releases}</p>
    </Section>
  )
}
