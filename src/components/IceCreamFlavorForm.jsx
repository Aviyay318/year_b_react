import { useState } from "react";
import axios from "axios";

const FRUITS = ["תפוח", "בננה", "מלון", "תות"];
const CHOCOLATES = ["שוקולד לבן", "שוקולד פרה", "שוקולד מריר", "השחר", "נוטלה"];

export default function IceCreamFlavorForm() {
    const [form, setForm] = useState({
        name: "",
        age: "",
        iceCreamPerWeek: "",
        likesIceCream: "",
        fruits: [],
        chocolate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFruitChange = (fruit) => {
        setForm((prev) => ({
            ...prev,
            fruits: prev.fruits.includes(fruit)
                ? prev.fruits.filter(f => f !== fruit)
                : [...prev.fruits, fruit]
        }));
    };

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post(
                "http://localhost:8080/api/icecream/register",
                form,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
                .then((response) => {
                    alert(response.data.message);
                })
                .catch((err) => {
                    console.error(err);
                    alert("שגיאה בשליחת הטופס");
                });
        }


    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "auto" }}>
            <h2> הרשמה לטעם חדש לגלידה</h2>


            <label>שם מלא:</label>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
            />


            <label>גיל:</label>
            <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
            />


            <label>כמה פעמים אתה אוכל גלידה בשבוע?</label>
            <input
                type="number"
                name="iceCreamPerWeek"
                value={form.iceCreamPerWeek}
                onChange={handleChange}
                required
            />


            <fieldset>
                <legend>האם אתה אוהב גלידה?</legend>
                <label>
                    <input
                        type="radio"
                        name="likesIceCream"
                        value="yes"
                        checked={form.likesIceCream === "yes"}
                        onChange={handleChange}
                    />
                    כן
                </label>
                <label>
                    <input
                        type="radio"
                        name="likesIceCream"
                        value="no"
                        checked={form.likesIceCream === "no"}
                        onChange={handleChange}
                    />
                    לא
                </label>
            </fieldset>


            <fieldset>
                <legend>בחר לפחות 2 טעמי פירות:</legend>
                {FRUITS.map(fruit => (
                    <label key={fruit}>
                        <input
                            type="checkbox"
                            checked={form.fruits.includes(fruit)}
                            onChange={() => handleFruitChange(fruit)}
                        />
                        {fruit}
                    </label>
                ))}
            </fieldset>


            <label>בחר תוספת שוקולד אחת:</label>
            <select
                name="chocolate"
                value={form.chocolate}
                onChange={handleChange}
                required
            >
                <option value="">-- בחר --</option>
                {CHOCOLATES.map(choco => (
                    <option key={choco} value={choco}>
                        {choco}
                    </option>
                ))}
            </select>

            <br /><br />
            <button type="submit">שלח מועמדות </button>
        </form>
    );
}
