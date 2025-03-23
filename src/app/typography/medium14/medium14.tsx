import React from 'react';
import styles from '../typography.module.scss';

const Medium14 = ({
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
			className={styles['medium-14']}
		>
			{children}
		</p>
	);
};

export default Medium14;
