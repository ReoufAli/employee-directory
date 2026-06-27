import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const employees = [
    { id: 1, name: "Reuof", job: "Frontend Developer" },
    { id: 2, name: "Ali", job: "Backend Developer" },
    { id: 3, name: "Reema", job: "UI/UX Designer" },
    { id: 4, name: "Hind", job: "Business Analyst" },
  ];

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  

 return (
  <div className="app">
    <h1>Employee Directory</h1>

    <SearchBar search={search} setSearch={setSearch} />

   <div className="employee-list">
  {filteredEmployees.length === 0 ? (
    <p>No employees found.</p>
  ) : (
    filteredEmployees.map((employee) => (
      <EmployeeCard
        key={employee.id}
        name={employee.name}
        job={employee.job}
      />
    ))
  )}
</div>
  </div>
);
}

export default App;