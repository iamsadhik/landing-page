import React from 'react';
import styles from '../typography.module.scss';

const SemiBold56 = ({
	children,
	color,
}: {
	children: React.ReactNode;
	color?: string;
}) => {
	return (
		<p
			style={
				{
					color: color,
				} as React.CSSProperties
			}
			className={styles['bold-56']}
		>
			{children}
		</p>
	);
};

export default SemiBold56;
