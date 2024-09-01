import LoginId from "@/componentes/LoginId";
import Password from "@/componentes/Password";
import Button from "@/componentes/Button";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/router";
const members = require("/user.json");

export default function Index () {
  const router = useRouter()

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (value: any) => {
    setName(value);
  };

  const onPasswordChange = (value: any) => {
    setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkArray = members.filter((member: any) => member.name === name);
    if (checkArray.length > 0) {
      router.push("/teams");
    } else {
      console.log("없지롱!!!");
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LoginId name={name} onChange={onNameChange}/>
        <Password password={password} onChange={onPasswordChange}/>
        <Button>로그인</Button>
        <Button>비밀번호찾기</Button>  
      </form>
    </div>
);
}
