import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<div className={styles.header}>
			<div>
				<h2>
					Docker<span className={styles.net}>Net</span>
				</h2>
			</div>
			<ul>
				<Link href='#home'>
					<a>
						<li>Home</li>
					</a>
				</Link>
				<Link href='#features'>
					<a>
						<li>Features</li>
					</a>
				</Link>
				<Link href='#gettingstarted'>
					<a>
						<li>Getting Started</li>
					</a>
				</Link>
				<Link href='#contributors'>
					<a>
						<li>Contributors</li>
					</a>
				</Link>
			</ul>
		</div>
	);
}
