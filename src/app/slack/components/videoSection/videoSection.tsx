'use client';
import React from 'react';
import styles from './videoSection.module.scss';
import { slackLabels } from '@/app/labels/slack.labels';
import SemiBold20 from '@/app/typography/semibold20/semibold20';
import SemiBold16 from '@/app/typography/semibold16/semibold16';
import SecondaryButton from '@/app/components/secondary-button/secondaryButton';

const VideoSection = () => {
	const {
		videoSection: { title, description, videoUrl, btnText },
	} = slackLabels;
	return (
		<div className={styles['video-section-con']}>
			<video
				src={videoUrl}
				className={styles['video-con']}
				autoPlay
				muted
				playsInline
				controls
				width={400}
				height={400}
			/>
			<div className={styles['content-con']}>
				<SemiBold20>{title}</SemiBold20>
				<SemiBold16>{description}</SemiBold16>
				<SecondaryButton
					onClick={() => {
						if (typeof window === 'undefined') {
							throw new Error('window is not defined');
						}
						window.open(
							'https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.mp4',
							'_blank'
						);
					}}
				>
					{btnText}
				</SecondaryButton>
			</div>
		</div>
	);
};

export default VideoSection;
