import type { Feature } from '../../types'
import { GlassCard } from '../atoms/GlassCard'
import { Icon } from '../atoms/Icon'

export const FeatureCard = ({ icon, title, description }: Feature) => (
  <GlassCard className="p-6 transition-colors hover:border-violet/40">
    <Icon name={icon} className="mb-5 text-violet-glow" />
    <h3 className="mb-2 font-semibold">{title}</h3>
    <p className="text-sm leading-relaxed text-mist">{description}</p>
  </GlassCard>
)
