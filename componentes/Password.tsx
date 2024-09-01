interface Password {
  password: string
  onChange: (value: any) => void
};


export default function Password({password, onChange}: Password ) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    onChange(newPassword)
  }
  return(
    <div>   
      <label htmlFor="name">비밀번호</label>
      <input name="password" type="password" id="password" value={password} onChange={handleChange} required/>
    </div>
  );
}