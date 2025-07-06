<div class="glassContainer">
	<button type="button" class="glassBtn">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
	</button>
</div>

<svg style="display: none">
	<filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
		<feTurbulence
			type="fractalNoise"
			baseFrequency="0.008 0.008"
			numOctaves="2"
			seed="92"
			result="noise"
		/>
		<feGaussianBlur in="noise" stdDeviation="0.02" result="blur" />
		<feDisplacementMap
			in="SourceGraphic"
			in2="blur"
			scale="77"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
	<filter id="btn-glass" primitiveUnits="objectBoundingBox">
		<feTurbulence
			type="fractalNoise"
			baseFrequency="0.008 0.008"
			numOctaves="2"
			seed="92"
			result="noise"
		/>
		<feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur"></feGaussianBlur>
		<feDisplacementMap
			id="disp"
			in="blur"
			in2="map"
			scale="1"
			xChannelSelector="R"
			yChannelSelector="G"
		></feDisplacementMap>
	</filter>
</svg>

<style>
	.glassContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 300px;
		height: 200px;
		border-radius: 30px;
	}

	.glassContainer::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		overflow: hidden;
		border-radius: 30px;
		-webkit-box-shadow:
			inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
			inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
		box-shadow:
			inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
			inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
	}

	.glassContainer::after {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		border-radius: 30px;
		-webkit-backdrop-filter: blur(0px);
		backdrop-filter: blur(0px);
		-webkit-filter: url(#container-glass);
		filter: url(#container-glass);
		overflow: hidden;
		isolation: isolate;
	}

	.glassBtn {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		cursor: pointer;
		width: 70px;
		height: 70px;
		padding: 15px;
		background: transparent;
		border-radius: 9999px;
		outline: none;
		border: none;
		z-index: 0;
	}

	.glassBtn::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		overflow: hidden;
		border-radius: 9999px;
		-webkit-box-shadow:
			inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
			inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
		box-shadow:
			inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
			inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
		background-color: rgb(255 255 255 / 10%);
	}

	.glassBtn::after {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		border-radius: 9999px;
		-webkit-backdrop-filter: blur(0px);
		backdrop-filter: blur(0px);
		-webkit-filter: url(#btn-glass);
		filter: url(#btn-glass);
		overflow: hidden;
		isolation: isolate;
	}

	.glassBtn svg {
		width: 100%;
		height: 100%;
		stroke: #fff;
	}
</style>
