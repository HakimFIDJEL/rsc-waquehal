import { useId } from "react"

type InputProps = {
    type: string;
    placeholder?: string;
    label?: string;
    inputClassName?: string;
    labelClassName?: string;
    [key: string]: any; // Pour accepter des props supplémentaires
  };
  
  export function Input({
    type,
    placeholder,
    label,
    inputClassName,
    labelClassName,
    ...props
  }: InputProps) {
    
    const id = useId()  
    const InputComponent = type === 'textarea' ? 'textarea' : 'input'

    return <div>



        <InputComponent  
            type={type}
            className={inputClassName}
            id={id}
            placeholder={placeholder}
            {...props}
            />
          {label && <label htmlFor={id} className={labelClassName}>{label}</label>}

    </div>
}

Input.displayName = 'Input'