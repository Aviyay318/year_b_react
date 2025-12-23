import {useState} from "react";

function Setting({row,setShowBoard,setRow}) {
    const [colors,setColors] = useState(["blue", "green", "blue","pink","yellow"]);

    return (
        <div>
            <h1>Setting</h1>
            <input value={row} type={"number"} onChange={(e) => setRow(e.target.value)}/>
            <p>row 4 to 10</p>
            <h2>player 1 color</h2>
            {
                colors.map((color, index) => {
                    return (
                        <div>
                            <div
                                style={{backgroundColor: color, width: 40, height: 40, borderRadius: 50}}
                                key={index}
                                onClick={() => alert(index)}
                            >{index}</div>
                        </div>
                    )
                })
            }


            <button disabled={row < 4 || row > 10}
                    onClick={() => setShowBoard(true)}>next
            </button>
        </div>
    )
}

export default Setting;