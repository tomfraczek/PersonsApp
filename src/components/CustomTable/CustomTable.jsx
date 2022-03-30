import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import CustomTableBody from '../CustomTableBody';

// const createRow = (name, calories, fat, carbs, protein) => {
//     return { name, calories, fat, carbs, protein };
// };

const createRow = (
    firstName,
    lastName,
    streetName,
    houseNo,
    apartmentNo,
    postal,
    town,
    phoneNo,
    dateOfBirth,
) => {
    return { firstName, lastName, streetName, houseNo, apartmentNo, postal, town, phoneNo, dateOfBirth };
};

const rows = [
    createRow('Mark', 'Calister', 'Picadily Circus', 5, 87, 'W07-C53', 'London', '07273683625', '12.05.2001'),
];

const columns = [
    'First Name',
    'Last Name',
    'Street Name',
    'House Number',
    'Appartmemt Number',
    'Postal',
    'Town',
    'Phone Number',
    'Date of Birth',
];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={`table-cel-${index}`}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <CustomTableBody body={rows} />
            </Table>
        </TableContainer>
    );
}
