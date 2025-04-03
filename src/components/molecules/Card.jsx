function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg border shadow-sm overflow-hidden ${className}`}>{children}</div>
}

function CardHeader({ children, className = "" }) {
  return <div className={`p-6 space-y-1.5 ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

function CardFooter({ children, className = "" }) {
  return <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
}

export { Card, CardHeader, CardContent, CardFooter }

