<template>
	<div
		class="flex space-x-1.5 text-sm font-light dark:text-gray-50"
		v-if="lanyard.listening_to_spotify"
	>
		<unicon
			fill="#00D95F"
			name="spotify"
			width="20"
			height="20"
			icon-style="line"
		></unicon>
		<a class="self-center" :href="link" rel="noopener noreferrer"
			>Listening to
			<span class="font-bold text-indigo-600 dark:text-indigo-500">{{
				song
			}}</span>
			by <span class="font-bold text-yellow-500">{{ artist }}</span> now</a
		>
	</div>
</template>

<script>
export default {
	data() {
		return {
			finished: false,
			lanyard: {},
			socket: null,
		};
	},
	computed: {
		song() {
			return this.lanyard?.spotify?.song || false;
		},
		artist() {
			return this.lanyard?.spotify?.artist || false;
		},
		link() {
			return `https://open.spotify.com/track/${
				this.lanyard?.spotify?.track_id
			}?si=${Math.random(36).toString(36)}`;
		},
	},
	beforeMount() {
		/**
		 * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
		 *
		 * Websocket connection is designed by EGGSY (https://eggsy.xyz)
		 */
		this.socket = new WebSocket("wss://api.lanyard.rest/socket");
		this.socket.addEventListener("open", () => {
			// Subscribe to ID
			this.socket.send(
				JSON.stringify({
					op: 2,
					d: {
						subscribe_to_id: "403225819222245377",
					},
				})
			);
			// Send heartbeat every 30 seconds
			setInterval(() => {
				this.socket.send(
					JSON.stringify({
						op: 3,
					})
				);
			}, 30000);
		});
		this.socket.addEventListener("message", ({ data }) => {
			const { t: type, d: status } = JSON.parse(data);
			if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
				this.lanyard = status || {};
			this.finished = true;
		});
	},
	beforeDestroy() {
		this.socket?.close();
	},
};
</script>