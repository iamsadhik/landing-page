'use client';
import React, { forwardRef } from 'react';
import styles from './modal.module.scss';
import { PropsType } from './modal.types';
import { IconX } from '@tabler/icons-react';
import { classNames } from '@/app/utils/general.util';

const Modal = forwardRef<HTMLDialogElement, PropsType>(
	({ children, closeCallback = null, sideToastModal }, ref) => {
		return (
			<dialog
				ref={(e) => {
					if (ref) {
						if (typeof ref === 'function') ref(e);
						else {
							ref.current = e;
						}
					}
				}}
				className={classNames(
					[
						styles['modal'],
						[styles['dialog']],
						closeCallback !== null && styles['modal-close'],
					],
					{
						[styles['side-toast-modal']]: sideToastModal,
					}
				)}
			>
				<div
					className={classNames(styles['modal-content-wrapper'])}
					style={
						{
							overflowY: `${closeCallback !== null ? 'auto' : ''}`,
						} as React.CSSProperties
					}
				>
					{children}
				</div>
				{closeCallback != null ? (
					<div className={styles['modal-close-btn']} onClick={closeCallback}>
						<IconX size={24} />
					</div>
				) : null}
			</dialog>
		);
	}
);

Modal.displayName = 'Modal';

export default Modal;
