import React from "react";
import Table from "react-bootstrap/Table";
const StudentTable = () => {
  return (
    <div
      style={{ marginTop: "100px", marginBottom: "460px", marginLeft: "60px" }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
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
    </div>
  );
};

export default StudentTable;
