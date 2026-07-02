import PhoneFrame from './PhoneFrame'

export default function AppScreen({
  children,
  theme = 'dark',
  size = 'md',
  className = '',
  interactive = true,
}) {
  return (
    <PhoneFrame theme={theme} size={size} className={className} interactive={interactive}>
      {children}
    </PhoneFrame>
  )
}
