import AppScreen from './AppScreen'
import AppScreenshotImage from './AppScreenshotImage'
import { useImages } from '../../data/screenshots'

/** Renders either a real PNG (if useImages) or the live UI component from your screenshots. */
export default function ScreenDisplay({
  screen,
  size = 'md',
  className = '',
  interactive = true,
  priority = false,
}) {
  if (useImages && screen.image) {
    return (
      <AppScreenshotImage
        src={screen.image}
        alt={screen.alt}
        theme={screen.theme}
        size={size}
        position={screen.position}
        className={className}
        interactive={interactive}
        priority={priority}
      />
    )
  }

  const Screen = screen.component
  return (
    <AppScreen theme={screen.theme} size={size} className={className} interactive={interactive}>
      <Screen theme={screen.theme} />
    </AppScreen>
  )
}
