import { useState } from "react";


const Form = ({data, setdata})=>{

    const [nameValue, setnameValue] = useState("");
    const [familyValue, setfamilyValue] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [phoneValue, setphoneValue] = useState("");


    function submit(e){
        e.preventDefault();

        const newUser = {
            name: nameValue,
            family: familyValue,
            email: emailValue,
            phone: phoneValue,
        }

        let newdata = [...data];
        newdata.push(newUser);
        setdata(newdata);
    }

    return(

        <form onSubmit={submit} id="form" className="form">

                      <div className="form-controls">
                          <label htmlFor="name">نام</label>
                          <input onChange={(e)=>setnameValue(e.target.value)} type="text" id="name" style={{direction: "rtl"}}/>
                          <small></small>
                      </div>

                      <div className="form-controls">
                          <label htmlFor="family"> نام خانوادگی</label>
                          <input onChange={(e)=>setfamilyValue(e.target.value)} type="text" id="family" style={{direction: "rtl"}}/>
                          <small></small>
                      </div>


                      <div className="form-controls">
                          <label htmlFor="email">ایمیل</label>
                          <input onChange={(e)=>setemailValue(e.target.value)} type="text" id="email"/>
                          <small></small>
                      </div>

                      <div className="form-controls">
                          <label htmlFor="phone">شماره تلفن</label>
                          <input onChange={(e)=>setphoneValue(e.target.value)} type="text" id="phone"/>
                          <small></small>
                      </div>
                      <button type="submit">عضویت</button>
                  </form>
    )

}

export default Form;