import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export const Signup = ()=>{
    return <div>
        <Heading label={"Signp"}></Heading>
        <SubHeading label={"Enter your information to create an account"}></SubHeading>
        <InputBox placeholder={"Fayazuddin"} label={"First Name"}></InputBox>
        <InputBox placeholder={"Shaik"} label={"Last Name"}></InputBox>
        <InputBox placeholder={"hello@gmail.com"} label={"Email"}></InputBox>
        <InputBox placeholder={"123456"} label={"Password"}></InputBox>
        {/* <Button label={"Sign up"}></Button> */}
        {/* <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning> */}
    </div>
}