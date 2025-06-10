import {useState} from "react";
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: "",         // ← Das hinzufügen
        message: ""    // ← Und das auch
    })

    return (
        <>
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            <form>
                <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                <InputField color={"black"} value={values.i} label="Stromstaerke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                <button type="submit">Calculate</button>
                <p>{values.message}</p>
            </form>
        </>
    )
}