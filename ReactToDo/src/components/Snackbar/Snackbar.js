import { Snackbar } from '@mui/material'

function SnackbarInfo({snackOpen, handleSnackClose, message}) {
  
  return (
    <Snackbar
        severity="success"
        open={snackOpen}
        autoHideDuration={4000}
        onClose={handleSnackClose}
        message={message}
    />
  )
}

export default SnackbarInfo