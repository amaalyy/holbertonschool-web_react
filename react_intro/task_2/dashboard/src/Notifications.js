import React from 'react'
import './Notifications.css'
import Closeicon from './close-icon.png';
import { getLatestNotification } from './utils.js';

export function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li
                    data-priority='urgent'
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
            <button
                aria-label='Close'
                type='button'
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                    cursor: 'pointer',
                    maxHeight: '20px',
                    background: 'transparent',
                    border: 'none'
                }}

            >
                <img
                    src={Closeicon}
                    alt='close-icon'
                    style={{
                        position: 'relative',
                        maxHeight: '12px',
                        background: 'transparent',
                        border: 'none',
                    }}
                />
            </button>
        </div>

    );
}
