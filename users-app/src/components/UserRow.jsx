import { TableCell, TableRow, Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const UserRow = ({handlerUserSelectedForm,handlerRemoveUser, user}) => {


    return (
        <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                <Button
                variant="contained"
                size="small"
                onClick={() => handlerUserSelectedForm(user)}
                startIcon={<EditIcon/>}>Update</Button>
            </TableCell>
            <TableCell>
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handlerRemoveUser(user.id)}
                startIcon={<DeleteIcon />}>Remove</Button></TableCell>
        </TableRow>
    )
}