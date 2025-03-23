import { classNames } from '@/app/utils/general.util';
import React from 'react';
import { ButtonDTO } from './primaryButton.type';
import styles from './primaryButton.module.scss'
import SemiBold14 from '@/app/typography/semibold14/semibold14';

const PrimaryButton = ({
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
				<SemiBold14 color="#fff">{children}</SemiBold14>
			) : (
				children
			)}
		</button>
	);
};

export default PrimaryButton;
