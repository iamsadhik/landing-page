export type ButtonDTO = {
	children: React.ReactNode | string;
	onClick: () => void;
	parentWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
};
