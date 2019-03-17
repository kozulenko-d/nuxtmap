<template>
	<section class="map-box">
		<div class="container">
		<div class="map-box__offices">
			<h2 class="map-box__offices-heading">Our offices</h2>
			<ul class="map-box__offices-items">
				<li
					class="map-box__offices-item"
					:class="{'active': currentCity === city}"
					v-for="(city, ind) in Object.keys(cityInfo)"
					:key="`city${ind}`"
					@click="currentCity = city"
				>{{ city }}</li>
			</ul>
			<div class="map-box__offices-company">{{ $store.state.companyName }}</div>
			<div class="map-box__offices-address">
				<address>
					{{ cityInfo[currentCity].location.address }}<br>
					{{ cityInfo[currentCity].location.index }}<br>
					{{ cityInfo[currentCity].location.country }}
				</address>
			</div>
		</div>
		<div class="map-box__location">
			<div id="map"></div>
		</div>
		</div>
	</section>
</template>
<script>
	import googleMapStyles from '~/assets/data/googleMapStyle.json'
	import customIcon from '~/assets/images/marker.png'
	export default {
		name: 'map-box',
		data () {
			return {
				officeCities: [
					'kyiv',
					'new york',
					'guangzhou',
					'barcelona'
				],
				currentCity: 'kyiv',
				cityInfo: {
					'kyiv': {
						coordinates: { lat: 50.445840, lng: 30.522224 },
						location: {
							address: 'Kyiv, Khreschatyk, 23',
							index: '01001',
							country: 'Ukraine'
						}
					},
					'new york': {
						coordinates: { lat: 40.710272, lng: -74.008266 },
						location: {
							address: '130 Fulton St, New York',
							index: 'NY 10038',
							country: 'USA'
						}
					},
					'guangzhou': {
						coordinates: { lat: 23.127567, lng: 113.265758 },
						location: {
							address: 'Yuexiu Qu, Guangzhou Shi, Guangdong Sheng',
							index: '510000',
							country: 'China'
						}
					},
					'barcelona': {
						coordinates: { lat: 41.393898, lng: 2.174854 },
						location: {
							address: 'Barcelona, Gran Via de les Corts Catalanes, 704',
							index: '08010',
							country: 'Spane'
						}
					}
				}
			}
		},
		methods: {
			initMaps () {
				const map = new google.maps.Map(document.querySelector('#map'), {
					center: this.requiredCoordinates,
					zoom: 14,
					styles: googleMapStyles
				});
				let marker = new google.maps.Marker({
					map,
					position: this.requiredCoordinates,
					title: 'office1',
					icon: customIcon
				});
			}
		},
		computed: {
			requiredCoordinates () {
				return this.cityInfo[this.currentCity].coordinates
			}
		},
		mounted () {
			this.$watch('currentCity', () => {
				this.initMaps()
			}, { immediate: true })
		}
	}
</script>
<style lang="scss">
	@import "~assets/scss/base/all";
	@import "~assets/scss/components/map-box";
</style>