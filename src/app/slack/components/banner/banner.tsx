'use client';
import React, { useState } from 'react';
import styles from './banner.module.scss';
import { slackLabels } from '@/app/labels/slack.labels';
import Medium14 from '@/app/typography/medium14/medium14';
import PrimaryButton from '@/app/components/primary-button/primaryButton';
import SemiBold56 from '@/app/typography/semibold56/semibold56';
import GoogleSigninButton from '@/app/components/google-signin-button/googleSigninButton';
import { IconX } from '@tabler/icons-react';
import { classNames } from '@/app/utils/general.util';

const Banner = () => {
	const { bannerSection } = slackLabels;
	const { btnText, description, ribbonTitle, title, videoUrl } = bannerSection;

	const [showRibbon, setShowRibbon] = useState(true);
	return (
		<div className={styles['banner-con']}>
			<div
				className={classNames(styles['ribbon-con'], {
					[styles['show-ribbon']]: !showRibbon,
				})}
			>
				<span
					className={styles['ribbon']}
					dangerouslySetInnerHTML={{
						__html: `${ribbonTitle
							.replace(
								'{digital HQ}',
								`<span class=${styles['hq']}>Digital HQ</span>`
							)
							.replace(
								'{letsgo}',
								`<a class=${styles['link']} href='https://slack.com/intl/en-in/'>Let's go</a>`
							)}`,
					}}
				></span>
				<IconX
					size={24}
					className={styles['close']}
					onClick={() => {
						setShowRibbon(false);
					}}
				/>
			</div>

			<div className={styles['banner-title-con']}>
				<div className={styles['title-con']}>
					<SemiBold56>{title}</SemiBold56>
					<Medium14>{description}</Medium14>
					<div className={styles['btn-con']}>
						<PrimaryButton onClick={() => {}}>{btnText}</PrimaryButton>
						<GoogleSigninButton />
					</div>
				</div>
				<video
					src={videoUrl}
					className={styles['video-con']}
					autoPlay
					muted
					playsInline
					controls={false}
					width={400}
					height={400}
				/>
			</div>
		</div>
	);
};

export default Banner;
