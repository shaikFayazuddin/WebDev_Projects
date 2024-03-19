import { AppBar } from "../components/AppBar";
import { Users } from "../components/Users";
import { Balance } from "../components/Balance";

export const Dashboard = () => {
    return <div>
        <AppBar ></AppBar>
        <div>
            <Balance value={"10,000"}></Balance>
            <Users></Users>
        </div>
    </div>
}