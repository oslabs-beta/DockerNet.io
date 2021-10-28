import Image from 'next/image';
import styles from '../../styles/Features.module.scss';

export default function RightDemo({ title, description, src, alt }) {
	return (
		<div className={styles.demoContainer}>
			<div className={styles.demoText}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.demoGif}>
				<Image src={src} alt={alt} layout='fill' objectFit='contain' />
			</div>
		</div>
	);
}
