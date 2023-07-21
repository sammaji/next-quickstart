import styles from "./loading-dots.module.css";

interface LoadingDotsProps {
	color?: string;
}

const LoadingDots = ({ color = "#fff" }: LoadingDotsProps) => {
	return (
		<span className={styles.loading}>
			<span style={{ backgroundColor: color }} />
			<span style={{ backgroundColor: color }} />
			<span style={{ backgroundColor: color }} />
		</span>
	);
};

export default LoadingDots;
