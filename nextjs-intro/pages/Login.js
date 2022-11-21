import Head from "next/head";
import styles from '../styles/Login.module.css'

function Login () {
  return (
      <>
        <Head>
        <title>Login</title> 
      </Head>
      <h1 className={styles.heading1}>Login</h1>
      </>
 
  );
}

export default Login;
