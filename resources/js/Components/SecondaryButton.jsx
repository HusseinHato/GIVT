export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-transparent border-2 border-red-500 rounded-md font-extrabold text-xs text-red-500 uppercase tracking-widest shadow-sm hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-25 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
