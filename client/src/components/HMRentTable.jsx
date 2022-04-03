import data2 from '../data/data2.json'
import {Table} from 'rsuite'
import React from 'react'

 
const HMRentTable = () => {
   const data = data2.filter((v, i) => i < 10);
   return (
    <div>
      <Table height={420} data={data} style={{fontSize: "1rem"}}>
        <Table.Column width={50} align="center" resizable>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.Cell dataKey="id" />
        </Table.Column>

        <Table.Column width={100} resizable>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>

        <Table.Column width={200} resizable>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.Cell dataKey="city" />
        </Table.Column>
        <Table.Column width={500} align="center">
          <Table.HeaderCell>Action</Table.HeaderCell>
          <Table.Cell>
            <span className="actions">
              <a>Create</a> &nbsp;&nbsp;
              <a> Edit </a> &nbsp;&nbsp;
              <a> Remove </a> &nbsp;&nbsp;
              <a> Generate a Report </a>
            </span>
          </Table.Cell>
        </Table.Column>
      </Table>
    </div>
   );
 };

 export default HMRentTable;