import Table from "react-bootstrap/Table";
import data from "./data";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#c7ecee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "auto",
          background: "#FFF",
          padding: "3rem",
          gap: "4rem",
        }}
      >
        <h1 style={{fontWeight:'bold' , paddingBottom:'2rem'}}>Map and Filter & Searching</h1>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%",borderRadius:'20px',padding:'1rem',fontSize:'1rem'  }}
         
        />

        <br />
        <br />
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {/*  */}
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
