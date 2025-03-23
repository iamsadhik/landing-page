import { classNames } from '@/app/utils/general.util';
import React from 'react';
import styles from './secondaryButton.module.scss';
import SemiBold14 from '@/app/typography/semibold14/semibold14';
import { ButtonDTO } from '../primary-button/primaryButton.type';

const SecondaryButton = ({
	children,
	onClick,
	parentWidth = false,
	disabled = false,
	loading,
}: ButtonDTO) => {
	return (
		<button
			onClick={() => {
				if (disabled || loading) return;
				onClick();
			}}
			className={classNames(styles['base-btn'], {
				[styles['w-full']]: parentWidth,
			})}
		>
			{typeof children === 'string' ? (
				<SemiBold14 color="#611f69">{children}</SemiBold14>
			) : (
				children
			)}
		</button>
	);
};

export default SecondaryButton;
