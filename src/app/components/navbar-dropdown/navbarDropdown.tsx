import React, { Dispatch, SetStateAction } from 'react';
import styles from './navbarDropdown.module.scss';
import { IconChevronDown } from '@tabler/icons-react';
import { classNames } from '@/app/utils/general.util';
import SemiBold14 from '@/app/typography/semibold14/semibold14';
import { slackLabels } from '@/app/labels/slack.labels';

const NavbarDropdown = ({
	title,
	isOpen,
	setOpen,
}: {
	title: string;
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		topbar: { navbarContent,watchDemo,downloadSlack,solution },
	} = slackLabels;
	return (
		<div className={styles['dropdown-main-con']}>
			<button
				className={styles['button-con']}
				onClick={() => setOpen((prev) => !prev)}
			>
				<SemiBold14>{title}</SemiBold14>

				<div
					className={classNames(styles['arrow-button'], {
						[styles['rotate']]: isOpen,
					})}
				>
					<IconChevronDown size={12} />
				</div>
			</button>
			<div
				className={classNames(styles['contents-con'], {
					[styles['show']]: isOpen,
				})}
			>
				<div className={styles['left-container']}>
					<div className={styles['items-map-container']}>
						{navbarContent.map((item) => {
							return (
								<div key={item.title} className={styles['dropdown-data-con']}>
									<p className={styles['title']}>{item.title}</p>
									{item.subContents.map((subItem) => {
										return (
											<div key={subItem.name}>
												<p className={styles['item-text']}>{subItem.name}</p>
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
					<div className={styles['help-container']}>
						<div className={styles['watch-demo-con']}>
							<p className={styles['link-text']}>{watchDemo}</p>
							<div className={styles['divider-con']}></div>
							<p className={styles['link-text']}>{downloadSlack}</p>
						</div>
						<p className={styles['link-text-black']}>{solution}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarDropdown;
