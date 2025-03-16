import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated"
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", children, ...props }, ref) => {
  // Base classes
  const baseClasses = "rounded-lg p-6"

  // Variant classes
  const variantClasses = {
    default: "bg-card text-card-foreground",
    bordered: "bg-card text-card-foreground border border-border",
    elevated: "bg-card text-card-foreground shadow-card",
  }

  return (
    <div ref={ref} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </div>
  )
})

Card.displayName = "Card"

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = "CardHeader"

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, children, ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  )
})

CardTitle.displayName = "CardTitle"

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
        {children}
      </p>
    )
  },
)

CardDescription.displayName = "CardDescription"

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("pt-0", className)} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = "CardContent"

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex items-center pt-4", className)} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

