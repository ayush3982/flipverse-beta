
import Layout from '../components/Layout'
import styles from '../styles/home.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, {useState} from 'react';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 400,
  bgcolor: 'background.paper',
  p: 4,
  radius: "5px",
};

const Home = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Layout>
        <div>
          <video className = {styles.videoContainer} autoPlay muted loop>
            <source src="./video2.mp4" type="video/mp4"/>
          </video>
          <div className = {styles.textContainer}>
            <div className = {styles.explore} onClick={handleOpen}>Enter the Flipverse!</div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className = {styles.loginContainer}>
                  <h2 className = {styles.loginHeading}>
                    Welcome to Flipverse
                  </h2>
                  <p className = {styles.loginText}>Enter the world of Flipverse and join your friends in this new virtual shopping experience</p>
                  <input className = {styles.loginInput} placeholder = "Enter your Phone Number"/>
                  <input type = "password" className = {styles.loginPassword} placeholder = "Password"/>
                  <button className = {styles.loginButton}>Sign in</button>
                  <Divider />
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home