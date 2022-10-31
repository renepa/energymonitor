import {useState} from "react";

export function UserGreeting(props: any) {
    return <h1>Willkommen zurück!</h1>;
}

export function GuestGreeting(props: any) {
    return <h1>Bitte melde dich an.</h1>;
}

export function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export function LoginButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Anmelden
        </button>
    );
}

export function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Abmelden
        </button>
    );
}

export function LoginControl(props: any) {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={()=>setLoggedIn(false)}/>;
    } else {
        button = <LoginButton onClick={()=>setLoggedIn(true)}/>;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {button}
        </div>
    );
}