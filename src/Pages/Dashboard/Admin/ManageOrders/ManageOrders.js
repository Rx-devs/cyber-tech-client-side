import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = React.useState([]);
    
    React.useEffect(() => {
        fetch(`https://young-castle-89002.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
        
    }, []);
    // table style
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            fontSize: 16,
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
    
    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                Manage All Orders
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>service Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Update Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.serviceName}
                                </StyledTableCell>
                                <StyledTableCell align="center">${order.servicePrice}</StyledTableCell>
                                <StyledTableCell align="center">{order.email}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button variant="contained">Pending</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    
    );
};

export default ManageOrders;