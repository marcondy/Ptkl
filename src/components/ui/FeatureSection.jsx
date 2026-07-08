import { MotionItem } from '../MotionSection'
import PageContainer from './PageContainer'
import SectionLabel, { SectionTitle, SectionBody } from './SectionLabel'
import AppScreen from './AppScreen'

export default function FeatureSection({
  id,
  label,
  title,
  body,
  children,
  screen,
  reverse = false,
  disableFrame = false,
  className = '',
}) {
  const Screen = screen

  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <PageContainer>
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionItem className={`min-w-0 ${reverse ? 'lg:order-2' : ''}`}>
            <SectionLabel>{label}</SectionLabel>
            <SectionTitle>{title}</SectionTitle>
            <SectionBody>{body}</SectionBody>
            {children}
          </MotionItem>

          <MotionItem
            delay={0.08}
            className={`flex min-w-0 justify-center ${reverse ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'}`}
          >
            {disableFrame ? (
              <Screen theme="dark" />
            ) : (
              <AppScreen theme="dark" size="lg" className="glow-neon">
                <Screen theme="dark" />
              </AppScreen>
            )}
          </MotionItem>
        </div>
      </PageContainer>
    </section>
  )
}
