import Image from 'next/image';

import styles from './Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profile}>
            <Image
                className={styles.avatar}
                alt=''
                width={500}
                height={500}
                src="https://github.com/f3l1p3v4.png" 
            />
            <div>
                <strong>Felipe Valdez</strong>
                <span>Web Developer</span>
            </div>
        </div>
    );
}