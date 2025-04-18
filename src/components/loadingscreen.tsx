import React from 'react';

const LoadingScreen: React.FC = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-white">
			<img
				src="/images/allbirds.svg" 
				alt="Loading..."
				className="w-32 h-32 animate-pulse"  
			/>
		</div>
	);
};

export default LoadingScreen;
