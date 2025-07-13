import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded rounded-[4px] text-[14px] leading-[24px] font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 disabled:bg-[var(--color-text-muted)] disabled:text-[var(--color-background-primary)] disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
    
    const variantClasses: Record<ButtonProps['variant'] & string, string> = {
      default: "bg-[var(--color-primary-500)] text-white shadow hover:bg-[var(--color-primary-600)]",
      destructive: "bg-[var(--color-status-error)] text-white shadow-sm hover:bg-[var(--color-status-error)]/90",
      outline: "border border-[var(--color-border-light)] bg-[var(--color-background-secondary)] shadow-sm hover:bg-[var(--color-background-tertiary)] hover:text-[var(--color-text-primary)]",
      secondary: "bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] shadow-sm hover:bg-[var(--color-background-tertiary)]",
      ghost: "hover:bg-[var(--color-background-tertiary)] hover:text-[var(--color-text-primary)]",
      link: "text-[var(--color-primary-500)] underline-offset-4 hover:underline",
    };
    
    const sizeClasses: Record<ButtonProps['size'] & string, string> = {
      default: "h-8 sm:h-10 !text-[12px] sm:!text-[14px] px-4 py-2",
      sm: "h-8 px-3",
      lg: "h-12 sm:h-13 px-8",
      icon: "h-10 w-10",
    };
    
    const variantClass = variantClasses[variant] || variantClasses.default;
    const sizeClass = sizeClasses[size] || sizeClasses.default;
    
    const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className || ""}`.trim();
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };