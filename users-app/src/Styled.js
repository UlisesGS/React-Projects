import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const CancelButton = styled(Button)(() => ({
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '#666',
  color: '#222',
  '&:hover': {
    backgroundColor: '#a3a3a3',
    borderWidth: 3,
    borderColor: '#444',
    color: '#000',
  },
}));

export const DeleteButton = styled(Button)(() => ({
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '#b71c1c',
  color: '#b71c1c',
  '&:hover': {
    backgroundColor: '#ff9999',
    borderWidth: 3,
    borderColor: '#7f0000',
    color: '#7f0000',
  },
}));

export const SaveButton = styled(Button)(() => ({
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '#2e7d32',
  color: '#2e7d32',
  '&:hover': {
    backgroundColor: '#145a17',
    borderWidth: 3,
    borderColor: '#145a17',
    color: '#a5d6a7',
  },
}));

export const LinkButton = styled(Button)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  '&.active': {
    color: 'primary.main',
    fontWeight: 'bold',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
  }
}));