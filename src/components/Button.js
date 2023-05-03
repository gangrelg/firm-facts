import icon from '../../src/assets/search.svg'

export default function Button({variant = 'default', children, disabled, ...props}) {
  return(
    <button type="button" className={`button button--${variant}`} disabled={disabled} {...props}>
      {
        variant === 'icon' && <img className='button__icon' src={icon} alt="" />
      }
      <span className='button__text'>
        {children}
      </span>
    </button>
  )
}
