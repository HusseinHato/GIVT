import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, placeholder, handleChange, disabled },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `border-gray-600 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                disabled={disabled}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
});
