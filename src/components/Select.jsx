import React from "react";

const Select = ({ options, value, onChange }) => {
    return (
        <select value={value} onChange={onChange}>
            {options.map(f =>
                <option key={f.value} value={f.value}>{f.name}</option>
            )}
        </select>
    )
}

export default Select;