import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const CustomTableBody = ({ body }) => (
    <>
        {body.map((item, index) => (
            <TableRow key={`table-row-${index}`} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {item.firstName}
                </TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.streetName}</TableCell>
                <TableCell>{item.houseNo}</TableCell>
                <TableCell>{item.apartmentNo}</TableCell>
                <TableCell>{item.postal}</TableCell>
                <TableCell>{item.town}</TableCell>
                <TableCell>{item.phoneNo}</TableCell>
                <TableCell>{item.dateOfBirth}</TableCell>
            </TableRow>
        ))}
    </>
);

export default CustomTableBody;
