import { useState } from "react"
import Avatar from "react-avatar";
import { UserBarContainer, AvatarIcon, UserName } from "./styles";
const UserBar = () => {
    const [username, setUsername] = useState('Name Surname');

    return (
        <UserBarContainer>
            <AvatarIcon>
                <Avatar name={username} round={true} color="#9EC59B" size="48"/>
            </AvatarIcon>
            <UserName>
                <section>{username}</section>
            </UserName>
        </UserBarContainer>
    )
}

export default UserBar;