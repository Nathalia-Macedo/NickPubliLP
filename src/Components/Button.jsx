function Button({ children, variant = "primary", className = "", ...props }) {
    const baseStyles = "px-6 py-2 rounded-full transition-all duration-200 "
    const variants = {
      primary: "bg-white text-[#1B3168] hover:bg-opacity-90",
      outline: "border border-white text-white hover:bg-white hover:text-[#1B3168]",
    }
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  }
  
export default Button;  