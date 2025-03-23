'use client';
import React, { useEffect, useRef } from 'react';
import styles from './slack.module.scss';
import Topbar from './components/topbar/topbar';
import Banner from './components/banner/banner';
import TrustMarkers from './components/trustMarkers/trustMarkers';
import VideoSection from './components/videoSection/videoSection';
import Modal from '../components/modal/modal';
import { slackLabels } from '../labels/slack.labels';
import SemiBold14 from '../typography/semibold14/semibold14';
import PrimaryButton from '../components/primary-button/primaryButton';
import SecondaryButton from '../components/secondary-button/secondaryButton';

const Slack = () => {
	const ref = useRef<HTMLDialogElement | null>(null);
	useEffect(() => {
		ref.current?.showModal();
	}, []);

	const closeModal = () => {
		ref.current?.close();
	};
	const {
		acceptCookies: { description, primarybtnText, secondaryBtnText },
	} = slackLabels;
	return (
		<div className={styles['parent-con']}>
			<Topbar />
			<div className={styles['content-con']}>
				<Banner />
				<TrustMarkers />
				<VideoSection />
			</div>
			<Modal closeCallback={closeModal} sideToastModal ref={ref}>
				<div className={styles['desc-con']}>
					<SemiBold14>{description}</SemiBold14>
					<div className={styles['btn-con']}>
						<PrimaryButton parentWidth onClick={closeModal}>
							{primarybtnText}
						</PrimaryButton>
						<SecondaryButton parentWidth onClick={closeModal}>
							{secondaryBtnText}
						</SecondaryButton>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default Slack;
