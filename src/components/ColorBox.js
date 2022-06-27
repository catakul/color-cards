import "./ColorBox.css"


export const ColorBox = ({color}) => {
    const handleClick = (event) => {
navigator.clipboard.writeText(color).then(() => {
alert(`Copied code: ${color}`);
    })
    .catch((error) => {
console.log(error);
alert("Copy failed!");
    });
};
return (<div className="color-box"
style={{backgroundColor: color,
}}
onClick={handleClick}
>
<input type="text" value={color}/>
<div className="color-box__delete">X</div>
</div>
);
};