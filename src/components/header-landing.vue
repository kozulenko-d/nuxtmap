<template>
	<section class="header-landing">
		<div class="container">
		<h1 class="header-landing__heading">Contacts</h1>
		<div class="header-landing__info">
			<div class="header-landing__info-headquarters">
				<h2 class="header-landing__info-subheading"><span class="highlighted">GMS</span> Headquarters</h2>
				<div class="header-landing__info-text-block header-landing__info-headquarters-block">
					<div class="header-landing__info-headquarters-block__address">
						<address class="address">
							{{ $store.state.companyName }}<br>
							Bundesstraße 5 | 3rd Floor<br>
							6300 Zug<br>
							Switzerland
						</address>
						<a :href="`tel:${phoneNum}`" class="header-landing__info-headquarters--phonenumber">
							{{ $store.state.mainPhoneNumber }}
						</a>
					</div>
					<div class="header-landing__info-headquarters-block__contacts">
						<div class="header-landing__info-headquarters-block__contacts--label">Email</div>
						<div>
							<a :href="`mailto:${$store.state.companyEmail}`"
								 class="header-landing__info-headquarters-block__contacts--item">
								{{ $store.state.companyEmail }}
							</a>
						</div>
						<div class="header-landing__info-headquarters-block__contacts--label">Send message</div>
						<div>
							<a :href="`viber://chat?number=${phoneNum}`"
								 class="header-landing__info-headquarters-block__contacts--item">
								viber us
							</a>
						</div>
						<div class="header-landing__info-headquarters-block__contacts--label">Send form</div>
						<div>
							<span class="header-landing__info-headquarters-block__contacts--item" @click="$emit('scrollToForm')">
								contact us
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="header-landing__info-support">
				<h2 class="header-landing__info-subheading">Technical support <span class="highlighted">24/7</span></h2>
				<div class="header-landing__info-support--description">
					GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients
					educational trainings to make your operator's business earn more and better though our best practices.
				</div>
				<a :href="`tel:${phoneNum}`" class="header-landing__info-support--phonenumber">{{ $store.state.mainPhoneNumber }}</a>
			</div>
		</div>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'header-landing',
		computed: {
			phoneNum () {
				return this.$store.state.mainPhoneNumber.replace(/ /g, '')
			}
		}
	}
</script>
<style lang="scss">
	@import "~assets/scss/base/all";
	@import '~assets/scss/components/header';
</style>