import { Table } from "react-bootstrap";

const Students = ({ students }) => {
  //Header for data
  const tableHeaders = Object.keys(students[0]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeaders.map((header) => {
            return <th key={header}>{header.toUpperCase()}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Students;
