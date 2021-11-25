import React from "react";

const Form = ({ f1, value, onInput }) => {
    return (
        <form>
            <input
                placeholder="новое дело"
                type="text"
                value={value}
                onInput={onInput}
            />
            <button onClick={f1}>+</button>
        </form>
    )
}

export default Form;