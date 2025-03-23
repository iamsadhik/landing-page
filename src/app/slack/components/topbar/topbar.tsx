'use client';
import React, { useState } from 'react';
import styles from './topbar.module.scss';
import Image from 'next/image';
import Slack from '../../../../../public/images/slack-logo.png';
import { slackLabels } from '@/app/labels/slack.labels';
import SemiBold14 from '@/app/typography/semibold14/semibold14';
import PrimaryButton from '@/app/components/primary-button/primaryButton';
import SecondaryButton from '@/app/components/secondary-button/secondaryButton';
import NavbarDropdown from '@/app/components/navbar-dropdown/navbarDropdown';
import { IconMenu2 } from '@tabler/icons-react';

const Topbar = () => {
	const { topbar } = slackLabels;
	const { topbarSections, primaryBtnLabel, secondaryBtnLabel, signIn } = topbar;
	const [open, setOpen] = useState(false);
	return (
		<div className={styles['top-con']}>
			<div className={styles['left-section']}>
				<Image src={Slack} width={100} height={36} alt="slack-logo" />
				<div className={styles['tb-items-con']}>
					{topbarSections.map((section) => {
						if (section.hasSubSections) {
							return (
								<NavbarDropdown
									title={section.label}
									setOpen={setOpen}
									isOpen={open}
									key={section.label}
								/>
							);
						}
						return (
							<div key={section.label} className={styles['tb-item']}>
								<SemiBold14>{section.label}</SemiBold14>
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles['right-section']}>
				<SemiBold14>{signIn}</SemiBold14>
				<SecondaryButton onClick={() => {}}>
					{secondaryBtnLabel}
				</SecondaryButton>
				<PrimaryButton onClick={() => {}}>{primaryBtnLabel}</PrimaryButton>
			</div>
			<IconMenu2 size={24} className={styles['hamburger']} />
		</div>
	);
};

export default Topbar;
