<template>
	<div>
		<HeaderLanding @scrollToForm="scrollToContacts"></HeaderLanding>
		<MapBox></MapBox>
		<ContactFooter></ContactFooter>
	</div>
</template>

<script>
	import HeaderLanding from '~/components/header-landing'
	import MapBox from '~/components/map-box'
	import ContactFooter from '~/components/contact-footer'

	export default {
		name: 'main-page',
		components: {
			HeaderLanding,
			MapBox,
			ContactFooter
		},
		methods: {
			scrollToContacts () {
				let scroll = document.querySelector('.contact-footer').offsetTop;
				window.scrollTo(0, scroll);
			}
		}
	}
</script>

<style lang="scss">
	@import "~assets/scss/base/all";
	@import "~assets/scss/pages/index";
</style>

