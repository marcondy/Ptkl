export default function PageContainer({ children, className = '', narrow = false }) {
  return (
    <div
      className={`mx-auto w-full min-w-0 ${
        narrow ? 'max-w-3xl' : 'max-w-6xl'
      } px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
