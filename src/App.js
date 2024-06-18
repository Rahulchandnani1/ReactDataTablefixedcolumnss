import React from 'react';
import DataTable from 'react-data-table-component';
import './App.css';  

const data = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 4, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 5, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 6, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 7, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 8, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 9, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 10, name: 'Jane Smith', age: 34, email: 'jane@example.com' },

];

const columns = [
  {
    name: 'ID',
    selector: row => row.id,
    sortable: true,
    cell: row => row.id,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    cell: row =>row.name,
  },
  {
    name: 'Age',
    selector: row => row.age,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
];

const customStyles = {
  table: {
    style: {
      width: 'auto',
    },
  },
  headCells: {
    style: {
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
};

const App = () => {
  return (
    <div className="table-container">
      <p>React Data Table with Fixed header </p>
    <div className="table-wrapper">
      <DataTable
        columns={columns}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight="300px"
        customStyles={customStyles}
      />
    </div>
  </div>
  );
};

export default App;
