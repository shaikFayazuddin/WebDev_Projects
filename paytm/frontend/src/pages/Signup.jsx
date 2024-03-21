import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export const Signup = ()=>{
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <Heading label={"Sign up"}></Heading>

        <SubHeading label={"Enter your information to create an account"}></SubHeading>

        <InputBox onChange={e=>{
            setFirstName(e.target.value)
        }} placeholder={"Fayazuddin"} label={"First Name"}></InputBox>
        
        <InputBox onChange={e=>{
            setLastName(e.target.value)
        }} placeholder={"Shaik"} label={"Last Name"}></InputBox>

        <InputBox onChange={e=>{
            setUsername(e.target.value)
        }} placeholder={"hello@gmail.com"} label={"Email"}></InputBox>

        <InputBox onChange={e=>{
            setPassword(e.target.value)
        }}placeholder={"123456"} label={"Password"}></InputBox>

        <Button onSubmit={async () => {
            // const response = await axios.post("http://localhost:3004/api/v1/user/signup", {
            //   username,
            //   firstName,
            //   lastName,
            //   password
            // });
            const response = await axios({
                method:"POST",
                url:"http://localhost:3004/api/v1/user/signup",
                data:{
                    firstName,
                    lastName,
                    username,
                    password
                }
            })
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
    </div>
}