import "./table.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TableComponent = () => {
    function createData(id, product, client, date, paymentMethod, status) {
        return {id, product, client, date, paymentMethod, status };
      }
      const rows = [
        createData(1, "chuj", "wiekszy chuj", 24, 4.0,"Oczekiwanie"),
        createData(2, "chuj", "wiekszy chuj", 37, 4.3,"Oczekiwanie"),
        createData(3, "chuj","wiekszy chuj", 24, 6.0,"Oczekiwanie"),
        createData(4, "chuj", "wiekszy chuj", 67, 4.3,"Oczekiwanie"),
        createData(5, "chuj", "wiekszy chuj", 49, 3.9,"Oczekiwanie"),
      ]
    return (
        <div className="table">
            <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Produkt</TableCell>
            <TableCell className="tableCell">Klient</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Metoda płatności</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="x" className="image" />
                {row.product}
              </div>
              </TableCell>
              <TableCell className="tableCell" >{row.client}</TableCell>
              <TableCell className="tableCell" >{row.date}</TableCell>
              <TableCell className="tableCell" >{row.paymentMethod}</TableCell>
              <TableCell className="tableCell" ><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}
 
export default TableComponent;