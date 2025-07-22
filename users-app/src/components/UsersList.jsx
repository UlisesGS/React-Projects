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
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const UsersList = () => {

    const {users} = useContext(UserContext)

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
                        users.map( item => (
                            <UserRow
                                key={item.user.id}
                                user={item.user}
                            />
                        ))
                    }
                </TableBody>
                </Table>
            </TableContainer>
        
    )
}