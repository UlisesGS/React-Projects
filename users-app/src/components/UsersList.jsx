import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const UsersList = ({users}) => {

    return(

            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell >Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map( user => (
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell><Button variant="contained" size="small" startIcon={<EditIcon />}>Update</Button></TableCell>
                                <TableCell><Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />}>Remove</Button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
        
    )
}