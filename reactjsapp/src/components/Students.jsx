import { Table } from "react-bootstrap";

const Students = ({ students }) => {
  //Header for data

  // total students = 30 -> object - {firstName:abc,lastName:'}
  const tableHeaders = Object.keys(students[0]);

  function abc() {
    const nums = [1, 2, 3, 4, 5];
    nums.forEach((num) => {
      console.log(num);
    });
  }

  // data["color"]
  // data["color"]

  const displayTableObjectData = (data) => {
    return (
      <table className="table table-bordered">
        <tbody>
          {Object.keys(data).map((key, index) => {
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>
                  {typeof data[key] === "object"
                    ? displayTableObjectData(data[key])
                    : data[key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
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
        {students.map((student, index) => {
          return (
            <tr key={student.id}>
              {Object.values(students[index]).map((value) => {
                return (
                  <td key={value}>
                    {typeof value === "object"
                      ? displayTableObjectData(value)
                      : value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Students;
