"use client"

function Button({ children, variant = "primary", className = "", onClick, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50"

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 h-10 px-4 py-2",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 h-10 px-4 py-2",
    outline: "border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 h-10 px-4 py-2",
    link: "text-primary-600 hover:underline p-0 h-auto",
    icon: "h-10 w-10 p-2.5",
  }

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button

