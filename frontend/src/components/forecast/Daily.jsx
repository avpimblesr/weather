import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function createData(hr1, hr2, hr3, hr4, hr5) {
  return { hr1, hr2, hr3, hr4, hr5 }
}

const rows = [
  createData('A', 'B', 'C', 'D', 'E'),
  createData('A', 'B', 'C', 'D', 'E'),
  createData('52', '51', '2', '72', '5'),
  createData(69, 74, 68, 60, 51),
  createData(57, 46, 46, 44, 37),
]

export default function DenseTable() {
  const classes = useStyles()

  return (
    <>
      <h3>Daily</h3>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Today</TableCell>
              <TableCell align='right'>Fri</TableCell>
              <TableCell align='right'>Sat</TableCell>
              <TableCell align='right'>Sun</TableCell>
              <TableCell align='right'>Mon</TableCell>
              {/* <TableCell align="right">5pm</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody style={{background: 'none'}}>
            {rows.map((row, ndx) => (
              <TableRow key={row.name}>
                {/* <TableCell component="th" scope="row">
                {row.name}
                Row
              </TableCell> */}
                <TableCell align='right'>
                  {ndx === 2
                    ? `${row.hr1}%`
                    : ndx > 2
                    ? `${row.hr1}\xB0`
                    : `${row.hr1}`}
                </TableCell>
                <TableCell align='right'>
                  {ndx === 2
                    ? `${row.hr2}%`
                    : ndx > 2
                    ? `${row.hr2}\xB0`
                    : `${row.hr2}`}
                </TableCell>
                <TableCell align='right'>
                  {ndx === 2
                    ? `${row.hr3}%`
                    : ndx > 2
                    ? `${row.hr3}\xB0`
                    : `${row.hr3}`}
                </TableCell>
                <TableCell align='right'>
                  {ndx === 2
                    ? `${row.hr4}%`
                    : ndx > 2
                    ? `${row.hr4}\xB0`
                    : `${row.hr4}`}
                </TableCell>
                <TableCell align='right'>
                  {ndx === 2
                    ? `${row.hr5}%`
                    : ndx > 2
                    ? `${row.hr5}\xB0`
                    : `${row.hr5}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
