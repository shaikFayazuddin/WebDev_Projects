import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"



export const Signin = ()=>{
    return <div>
        <Heading label={"Sign in"}></Heading>
        <InputBox placeholder={"hello@gmail.com"} label={"Email"}></InputBox>
        <InputBox placeholder={"hello1234"} label={"Password"}></InputBox>
        <div>
            <Button label={"Sign in"}></Button>
        </div>
        <BottomWarning label={"Don't have an account?"} to={"/signup"} buttonText={"Sign up"}></BottomWarning>
    </div>
}