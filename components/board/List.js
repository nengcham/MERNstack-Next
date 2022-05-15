import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function List({columns, data}) {
  return (
    <TableContainer component={Paper}>

    <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {columns.map((column) => 
            <StyledTableCell align="left">{column}</StyledTableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data)=>(
            <StyledTableRow key={data.name}>
            <StyledTableCell align="left">{data.date}</StyledTableCell>
            <StyledTableCell align="left">{data.title}</StyledTableCell>
            <StyledTableCell align="left">{data.subject}</StyledTableCell>
            <StyledTableCell align="left">{data.name}</StyledTableCell>
            <StyledTableCell><button>수정</button>  <button>삭제</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
