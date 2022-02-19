import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein, id: name.trim() };
}
let rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomerList({ filter }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const filteredRows = rows.filter((r) =>
    r.name.toLowerCase().includes(filter.toLowerCase())
  );
  const renderRows = (rs) => {
    return rs.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" className="font-semibold">
          {row.name}
        </TableCell>

        <TableCell className="font-semibold">{row.carbs}</TableCell>
        <TableCell align="left">
          <Button
            onClick={() => handleClick(row.id)}
            className="bg-orange-500 text-white px-3 hover:bg-orange-400 m-2 "
          >
            detay 
          </Button>
          <Button
            onClick={() => handleClick(row.id)}
            className="bg-green-500 text-white px-3 hover:bg-green-400 m-2"
          >
            tahsilat
          </Button>
          <Button
            onClick={() => handleClick(row.id)}
            className="bg-blue-500 text-white px-3 hover:bg-blue-400 m-2"
          >
            satış
          </Button>
        </TableCell>
      </TableRow>
    ));
  };
  const handleClick = (customerId) => {
    console.log(customerId);
    router.push(customerId);
  };
  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table" size="small">
        <colgroup>
          <col width="30%" />
          <col width="10%" />
          <col width="20%" />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold ">Firma Adı</TableCell>
            <TableCell className="font-semibold ">Bakiye</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {filter ? renderRows(filteredRows) : renderRows(rows)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
