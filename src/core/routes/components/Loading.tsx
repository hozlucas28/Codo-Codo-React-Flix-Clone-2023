import { Container, Loading as LoadingNextUI } from '@nextui-org/react'

export default function Loading() {
	return (
		<Container
			css={{
				h: '100vh',
			}}
			display='flex'
			justify='center'
			alignContent='center'
		>
			<LoadingNextUI />
		</Container>
	)
}
