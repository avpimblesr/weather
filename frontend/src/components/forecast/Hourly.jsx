import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(hr1, hr2, hr3, hr4, hr5) {
  return { hr1, hr2, hr3, hr4, hr5 };
}

const rows = [
  createData('A', 'B', 'C', 'D', 'E'),
  createData('57', '262', '16.0', '24', '6.0'),
  createData(51, 51, 52, 55, 64),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <>
      <h3>Hourly</h3>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">7am</TableCell>
          <TableCell align="right">9am</TableCell>
            <TableCell align="right">11am</TableCell>
            <TableCell align="right">1pm</TableCell>
            <TableCell align="right">3pm</TableCell>
            {/* <TableCell align="right">5pm</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, ndx) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
                Row
              </TableCell> */}
              <TableCell align="right">{(ndx === 1) ? `${row.hr1}%` : (ndx === 2) ? `${row.hr1}\xB0` : `${row.hr1}` }</TableCell>
              <TableCell align="right">{(ndx === 1) ? `${row.hr2}%` : (ndx === 2) ? `${row.hr2}\xB0` : `${row.hr2}` }</TableCell>
              <TableCell align="right">{(ndx === 1) ? `${row.hr3}%` : (ndx === 2) ? `${row.hr3}\xB0` : `${row.hr3}` }</TableCell>
              <TableCell align="right">{(ndx === 1) ? `${row.hr4}%` : (ndx === 2) ? `${row.hr4}\xB0` : `${row.hr4}` }</TableCell>
              <TableCell align="right">{(ndx === 1) ? `${row.hr5}%` : (ndx === 2) ? `${row.hr5}\xB0` : `${row.hr5}` }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
