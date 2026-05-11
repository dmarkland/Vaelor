'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FallingPatternProps = React.ComponentProps<'div'> & {
	color?: string;
	backgroundColor?: string;
	duration?: number;
	density?: number;
};

export function FallingPattern({
	color = 'rgba(120,180,255,0.1)',
	backgroundColor = '#000',
	duration = 120,
	density = 1,
	className,
}: FallingPatternProps) {
	// Reduced to 6 gradient groups (was 12) — same visual, half the paint cost
	const generateBackgroundImage = () => {
		const patterns = [
			`radial-gradient(3px 90px at 0px 235px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 235px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 117px, ${color} 100%, transparent 150%)`,
			`radial-gradient(3px 90px at 0px 150px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 150px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 75px, ${color} 100%, transparent 150%)`,
			`radial-gradient(3px 90px at 0px 253px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 253px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 126px, ${color} 100%, transparent 150%)`,
			`radial-gradient(3px 90px at 0px 179px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 179px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 89px, ${color} 100%, transparent 150%)`,
			`radial-gradient(3px 90px at 0px 299px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 299px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 149px, ${color} 100%, transparent 150%)`,
			`radial-gradient(3px 90px at 0px 210px, ${color}, transparent)`,
			`radial-gradient(3px 90px at 300px 210px, ${color}, transparent)`,
			`radial-gradient(1.5px 1.5px at 150px 105px, ${color} 100%, transparent 150%)`,
		];
		return patterns.join(', ');
	};

	const backgroundSizes = [
		'300px 235px','300px 235px','300px 235px',
		'300px 150px','300px 150px','300px 150px',
		'300px 253px','300px 253px','300px 253px',
		'300px 179px','300px 179px','300px 179px',
		'300px 299px','300px 299px','300px 299px',
		'300px 210px','300px 210px','300px 210px',
	].join(', ');

	const startPositions = '0px 220px, 3px 220px, 151px 337px, 50px 16px, 53px 16px, 201px 91px, 75px 224px, 78px 224px, 226px 230px, 150px 31px, 153px 31px, 301px 120px, 175px 235px, 178px 235px, 326px 384px, 250px 75px, 253px 75px, 401px 180px';
	const endPositions =   '0px 6800px, 3px 6800px, 151px 6917px, 50px 5416px, 53px 5416px, 201px 5491px, 75px 17175px, 78px 17175px, 226px 17301px, 150px 9876px, 153px 9876px, 301px 9965px, 175px 13391px, 178px 13391px, 326px 13540px, 250px 6375px, 253px 6375px, 401px 6480px';

	return (
		<div className={cn('relative h-full w-full', className)}>
			<motion.div
				className="size-full"
				style={{
					backgroundColor,
					backgroundImage: generateBackgroundImage(),
					backgroundSize: backgroundSizes,
					willChange: 'background-position',
					transform: 'translateZ(0)',
				}}
				variants={{
					initial: { backgroundPosition: startPositions },
					animate: {
						backgroundPosition: [startPositions, endPositions],
						transition: {
							duration,
							ease: 'linear',
							repeat: Number.POSITIVE_INFINITY,
						},
					},
				}}
				initial="initial"
				animate="animate"
			/>
			{/* Lightweight dot overlay — no backdrop-filter */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0, transparent 1.5px, ${backgroundColor} 1.5px)`,
					backgroundSize: `${8 * density}px ${8 * density}px`,
				}}
			/>
		</div>
	);
}
