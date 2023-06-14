export default function Checkbox({ name, value, handleChange, checked }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-600 text-red-600 shadow-sm focus:ring-red-500"
            onChange={(e) => handleChange(e)}
            checked={checked}
        />
    );
}
