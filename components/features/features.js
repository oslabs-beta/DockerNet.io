import RightDemo from './rightdemo';
import LeftDemo from './leftdemo';
import styles from '../../styles/Features.module.scss';
import Dashboard from '../../public/dashboard.png';
import ViewNetworkDemo from '../../public/navigate-to-network.gif';
import NetworkDemo from '../../public/create-network.gif';
import ContainerDemo from '../../public/connect-container-to-network.gif';

export default function Features() {
	const visualizeDemo =
		"DockerNet's browser-based GUI allows users to easily visualize the relationship between Docker Networks and containers. Upon start-up, all active networks running on your machine will automatically populate DockerNet's left panel. Clicking a network will then display all containers connected to that network — either in a list view or graphical view";
	const containerDemo =
		"DockerNet's interface  provides developers an easy way to manually connect or disconnect a container from any active network running on your machine. To connect a container, simply choose from a drop-down menu the network you want to connect the container to, and DockerNet will handle the rest";
	const networkDemo =
		"Concurrent to DockerNet's connecting or disconnecting containers features, developers have the option to manually add or delete any networks that are running on their machines. To add a Docker Network, simply provide a name for your network, and select from a drop-down menu the network's driver type";

	return (
		<div className={styles.container} id='features'>
			<h1>Features</h1>
			<RightDemo
				title='Visualize Networks and Containers'
				description={visualizeDemo}
				src={ViewNetworkDemo}
			/>
			<LeftDemo
				title='Connect or Disconnect a Container to Any Active Network'
				description={containerDemo}
				src={ContainerDemo}
			/>
			<RightDemo
				title='Add or Delete a Network to Your Local Machine'
				description={networkDemo}
				src={NetworkDemo}
			/>
		</div>
	);
}
