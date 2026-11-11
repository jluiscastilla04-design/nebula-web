import { COMMUNITY_CARDS, PLACEHOLDER_HREF } from '../../config/site'
import { GlassCard } from '../atoms/GlassCard'
import { Section } from '../atoms/Section'

export const Community = () => (
  <Section className="border-t border-silver/10" containerClassName="grid gap-6 md:grid-cols-2">
    {COMMUNITY_CARDS.map(({ id, title, description, action }) => (
      <GlassCard key={id} id={id} className="p-8">
        <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
        <p className="mb-6 leading-relaxed text-mist">{description}</p>
        <a href={PLACEHOLDER_HREF} className="text-sm font-semibold text-cyan transition-colors hover:text-silver">
          {action}
        </a>
      </GlassCard>
    ))}
  </Section>
)
