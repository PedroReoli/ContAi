import type React from "react"
import { type InputHTMLAttributes, forwardRef } from "react"
import Input from "@/components/ui/Input"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  containerClassName?: string
  labelClassName?: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, helperText, error, leftIcon, rightIcon, containerClassName, labelClassName, className, ...props }, ref) => {
    return (
      <Input
        label={label}
        helperText={helperText}
        error={error}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        containerClassName={containerClassName}
        className={className}
        ref={ref}
        {...props}
      />
    )
  },
)

InputField.displayName = "InputField"

export default InputField

