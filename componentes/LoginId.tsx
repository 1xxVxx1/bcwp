import { SyntheticEvent } from "react";

interface Name {
  name: string
  onChange: (value: any) => void
};

export default function LoginId({name, onChange}: Name ) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    onChange(newName)
  }
  return(
    <div>   
      <label htmlFor="name">이름</label>
      <input name="name" id="name" value={name} onChange={handleChange} required/>
    </div>
  );
}