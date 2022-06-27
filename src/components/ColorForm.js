import "./ColorForm.css";
import {useState} from "react";

export const ColorForm = () => {
    const [color, setColor] = useState("#000000")
    const handleSubmit=(event) => {
        event.preventDafault();
    };
    const handleChange=(event) => {
setColor(event.target.value);
    };
return ( <form className="color-form"
onSubmit={handleSubmit}
//zeile 16 bis 17 ist optional, das ändert auch dei frabe von dem container
// für den Farbwechsel
style={{backgroundColor: color,
}}
>
<input type="color" value={color} onChange={handleChange} />
<input type="text" value={color} onChange={handleChange} />
<button>Add</button>
</form>
);
};