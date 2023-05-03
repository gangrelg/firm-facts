export default function FirmFactCard({variant = 'default', children}) {
  return(
    <div className={`card card--${variant}`}>
      {children}
    </div>
  )
}
