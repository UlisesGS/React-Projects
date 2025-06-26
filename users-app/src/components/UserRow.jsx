import { TableCell, TableRow, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const UserRow = ({user}) => {

    return (
        <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell><Button variant="contained" size="small" startIcon={<EditIcon />}>Update</Button></TableCell>
            <TableCell><Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />}>Remove</Button></TableCell>
        </TableRow>
    )
}