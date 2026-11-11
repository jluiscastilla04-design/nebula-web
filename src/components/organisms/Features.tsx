import { COPY, FEATURES, SECTION_ID } from '../../config/site'
import { Section } from '../atoms/Section'
import { SectionHeading } from '../atoms/SectionHeading'
import { FeatureCard } from '../molecules/FeatureCard'

export const Features = () => (
  <Section id={SECTION_ID.ecosystem} className="border-t border-silver/10">
    <SectionHeading title={COPY.features.title} description={COPY.features.description} />
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  </Section>
)
