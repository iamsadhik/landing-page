import { slackLabels } from '@/app/labels/slack.labels';
import Image from 'next/image';
import React from 'react';
import styles from './trustMarkers.module.scss';

const TrustMarkers = () => {
	const { ourClients } = slackLabels;
	return (
		<div className={styles['trust-markers-con']}>
			{ourClients.map((item, index) => {
				return (
					<Image
						key={index}
						src={item}
                        alt="client-logo"
                        className={styles['img']}
						width={84}
						height={44}
					/>
				);
			})}
		</div>
	);
};

export default TrustMarkers;
