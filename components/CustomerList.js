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
import { setLoadingState } from "../store/slices/rootSlice";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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
  const filteredRows = rows.filter((r) =>
    r.name.toLowerCase().includes(filter.toLowerCase())
  );
  const renderRows = (rs) => {
    return rs.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell className="w-10" align="left">
          <Button
            onClick={handleClick}
            className="bg-blue-500 text-white px-3 hover:bg-blue-400 "
          >
            Görüntüle
          </Button>
        </TableCell>
      </TableRow>
    ));
  };
  const handleClick = () => {
    dispatch(setLoadingState(true));
    setTimeout(() => {
      dispatch(setLoadingState(false));
    }, 2000);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="font-semibold ">Firma Adı</TableCell>
            <TableCell className="font-semibold ">Firma Sahibi</TableCell>
            <TableCell className="font-semibold ">Son Satış Miktarı</TableCell>
            <TableCell className="font-semibold ">Bakiye</TableCell>
            <TableCell className="w-10" />
          </TableRow>
        </TableHead>
        <TableBody>
          {filter ? renderRows(filteredRows) : renderRows(rows)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
