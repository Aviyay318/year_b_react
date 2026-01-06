import React from "react";

function ImageComponent() {
    const imageUrl = "https://www.lemonana.co.il/cache/w_1500/%D7%AA%D7%A4%D7%95%D7%97%20%D7%A2%D7%A5%20%D7%90%D7%93%D7%95%D7%9D(3).jpg";

    return (
        <div>
            <h2>תמונה מהקישור </h2>
            <img
                src={imageUrl}
                alt="תפוח אדום"
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
        </div>
    );
}

export default ImageComponent;
