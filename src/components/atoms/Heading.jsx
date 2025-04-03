function Heading({ level = 2, children, className = "" }) {
  const baseClasses = "font-bold tracking-tighter"

  const sizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl sm:text-3xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  }

  const Component = `h${level}`
  const classes = `${baseClasses} ${sizes[level]} ${className}`

  return <Component className={classes}>{children}</Component>
}

export default Heading

