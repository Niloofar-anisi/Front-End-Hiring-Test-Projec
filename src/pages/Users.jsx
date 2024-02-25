import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
  mb: 3
}

export default function KeepMountedModal () {
  const [open, setOpen] = React.useState(false)
  const modalRef = React.useRef(null)
  const nameFieldRef = React.useRef(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === 'F2') {
      handleOpen()
    } else if (event.ctrlKey && event.shiftKey && event.key === 'F3') {
      if (nameFieldRef.current) {
        nameFieldRef.current.focus()
      }
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        display a dialog with ctrl+shift+f2
      </Typography>

      <Button style={{ display: 'inline-block', backgroundColor: ' #c7ddf9 ', marginTop: 30, paddingLeft: 15, paddingRight: 15, fontSize: 20, borderRadius: 20 }}onClick={handleOpen}>Open modal STEP 5 </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        ref={modalRef}>
        <Box sx={style} >
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           display a dialog with ctrl+shift+f2
          </Typography>
          <div style={{ display: 'flex', gap: 20, marginTop: 30, paddingLeft: 5, paddingRight: 5 }}>
            <TextField id="outlined-basic" label="NAME:" variant="outlined" inputRef={nameFieldRef} />
            <TextField id="outlined-basic" label="FAMILY:" variant="outlined" />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
