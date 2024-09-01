const members = require("/mockData.json");

export default function Mrs () {
  return (
    <ul>
      {
        members.map((mr: any) => {
          return (<li key={mr.mr}>{`${mr.team} ${mr.mr}`}</li>);
        })
        }
    </ul>
  );
};