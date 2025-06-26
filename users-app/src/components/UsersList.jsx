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

import { UserRow } from './UserRow';

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
                            <UserRow key={user.id} user={user}/>
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
        
    )
}