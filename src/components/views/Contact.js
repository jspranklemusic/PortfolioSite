import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../jsx/Button'

const Div = styled.div`
    animation:fade-basic 0.6s backwards;
    animation-delay:0.15s;
    width:100%;
    height:95%;
`

const Spinner = styled.div`
    margin:1.5rem auto;

    .icon{
        animation:rotate 1s infinite linear;
        font-size:1rem;
    }

    .text{
        font-size:1rem;
        animation:fade-repeat 1s infinite linear;
    }
`

const Form = styled.form`
    animation:slide-left 0.6s backwards;
    display:flex;
    flex-direction:column;
    width:100%;
    
    max-width:600px;
    margin:1rem auto;
    background:white;
    box-shadow:3px 3px 5px rgba(0,0,0,.25);
    height:95%;
    min-height:500px;
    align-items:center;
    padding:1rem;
    border-radius:10px;


    .form-control{
        width:100%;
        display:grid;
        margin:1rem 0;
        align-items:center;
        justify-content:space-between;
        grid-template-columns:24% 76%;

    }

        label{
            flex:1;
            font-weight:bold;
            padding:0rem 0.5rem;
            text-align:left;
           
        }

        textarea{
            flex:10;
            width:98.5%;
            border:none;
            outline:transparent;
            border:2px solid rgb(200,200,200);
            border-radius:15px;
            padding:1rem;
            transition:0.25s;

            &:focus{
                background:rgba(130,130,255,0.15);
                border:2px solid var(--darkskyblue);
            }
        }

        [is_error="true"]{
            background:rgba(255,130,130,0.15);
            border:2px solid red;
        }

        input{
            flex:6;
            padding:0.5rem 1rem;
            font-size:1rem;
            border:2px solid rgb(200,200,200);
            border-radius:100px;
            outline:transparent;
            transition:0.25s;
            box-shadow:none;


            &:focus{
                background:rgba(130,130,255,0.15);
                border:2px solid var(--darkskyblue);
            }
        }
        
        .links{
            margin:1rem 0;
            width:100%;
            display:flex;
            justify-content:center;

            & > *{
                flex:0;
                margin:0 0.5rem;
            }

        }
    
`

const Contact = ()=>{

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });    

    function submitHandler(e){
        setForm({...form, [e.target.id]:e.target.value})
    }
    function validate(e){
       if(!e.target.value){
           document.getElementById(e.target.id).setAttribute("is_error",true)
       }else if(e.target.id=="email"){
           const input = e.target.value;
           const regex = new RegExp(/\w+[@]\w+[.]\w+/)
           console.log(input)
           if(!regex.test(input)){
            document.getElementById(e.target.id).setAttribute("is_error",true)
           }else{
            document.getElementById(e.target.id).setAttribute("is_error",false)
           }
           
       }else{
        document.getElementById(e.target.id).setAttribute("is_error",false)
       }
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    async function submitForm(e){
        setSubmitting(true);

        e.preventDefault();

        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form })
          }).catch(error => console.log(error));
          if(response.ok){
            console.log("all good.")
            setSubmitting(false);
            setSubmitted(true);
          }else{
              console.log(response);
          }
    
          
    }
    

    return(
        <Div>
            
            <div style={{height:"100%"}}>

            {submitted && <div>
                <h1>Thank you for your submission!</h1>
                <p>I will be in touch with you shortly.</p>
                </div>}
            {!submitted && <Form name="contact" data-netlify="true" onSubmit={submitForm}>
            <input name="form-name" value="Netlify Rocks" type="hidden" />
                    <h1>Let's get in touch.</h1>
                    <div className="links">
                        <a target="_blank" rel="noreferrer" href="https://github.com/jspranklemusic">Github</a> 
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josiah-sprankle-8862a1103/">LinkedIn</a> 
                        <a href="mailto:jspranklemusic@gmail.com">Email</a>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name">Name<span style={{color:"red"}}>*</span></label>
                        <input is_error="false" onBlur={validate} required onInput={submitHandler} name="name" id="name" type="text"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email<span style={{color:"red"}}>*</span></label>
                        <input is_error="false" onBlur={validate} required onInput={submitHandler} name="email" id="email" type="email"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="subject">Subject<span style={{color:"red"}}>*</span></label>
                        <input  is_error="false" onBlur={validate} required onInput={submitHandler} name="subject" id="subject" type="text"/>
                    </div>

              

                    <label htmlFor="message">Message</label>
                    <textarea onInput={submitHandler} name="message" id="message" type="text"/>
                    {!submitting && <Button style={{margin:"auto", marginTop:"1rem"}}  type="submit">Submit</Button>}
                    {submitting && <Spinner>
                        <span><i class="fas fa-circle-notch icon"></i></span>
                        &nbsp;
                        <span className="text"> Processing...</span>
                       
                        </Spinner>}
                    

            </Form>}
            </div>
           
          
        </Div>
    )
}

export default Contact;