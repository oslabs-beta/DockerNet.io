import Link from 'next/link';
import styles from '../styles/GettingStarted.module.scss';

export default function GettingStarted() {
	return (
		<div className={styles.container} id='gettingstarted'>
			<h1>Getting Started</h1>
			<p>
				For more information on getting started, check out our{' '}
				<Link href='https://github.com/oslabs-beta/DockerNet'>
					<a>ReadMe</a>
				</Link>{' '}
				on Github
			</p>
			{/* <ol>
				<li>
					Clone{' '}
					<Link href='https://github.com/oslabs-beta/DockerNet'>
						<a>Repo</a>
					</Link>{' '}
					to local device -{' '}
					<span>git clone https://github.com/oslabs-beta/DockerNet.git</span>
				</li>
				<li>Navigate to the DockerNet directory in terminal of choice</li>
				<li>
					Install required packages on local device - <span>npm install</span>
				</li>
				<li>
					Start app using the following command <span>(npm start)</span>
				</li>
			</ol> */}
		</div>
	);
}
