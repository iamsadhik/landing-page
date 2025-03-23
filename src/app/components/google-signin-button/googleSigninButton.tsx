import React from 'react';
import styles from './googleSigninButton.module.scss';
import Image from 'next/image';
import GoogleImage from '../../../../public/images/google.png';
import { slackLabels } from '@/app/labels/slack.labels';

const GoogleSigninButton = () => {
	const {
		bannerSection: { googleSignInBtn },
	} = slackLabels;
	return (
		<button className={styles['google-signin-button']}>
			<Image src={GoogleImage} alt="google-image" width={30} height={30} />
			{googleSignInBtn}
		</button>
	);
};

export default GoogleSigninButton;
