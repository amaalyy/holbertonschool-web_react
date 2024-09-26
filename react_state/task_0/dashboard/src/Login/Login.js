import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={css(styles.body)}>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.bodyContainer)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button onClick={() => alert('Login clicked')}>OK</button>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '45px',
    gap: '20px',
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }
});

export default Login;
