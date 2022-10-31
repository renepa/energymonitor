import {ReactNode, ReactPropTypes} from "react";

export interface AuthorProps {
    name:string
    avatarUrl: string
}
export interface CommentProps{
    author:AuthorProps
    text:string
    date:Date
}

function formatDate(date: Date) {
    return date.toLocaleDateString();
}

export function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}