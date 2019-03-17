<template>
	<section class="contact-footer">
		<div class="container">
			<h2 class="contact-footer__heading">contact us</h2>
			<div class="contact-footer__container">
				<form class="contact-footer__form">
					<div class="contact-footer__form-inputline" :class="{'active': nameFocus, 'wrong': !valid.name}">
						<label for="name">Name</label>
						<input
							type="text"
							id="name"
							v-model="name"
							@focus="nameFocus = true"
							@blur="nameFocus = false"
						>
					</div>
					<div class="contact-footer__form-inputline" :class="{'active': phoneFocus, 'wrong': !valid.phone}">
						<label for="phone">Phone</label>
						<input
							type="text"
							id="phone"
							v-model="phone"
							@focus="phoneFocus = true"
							@blur="phoneFocus = false"
							placeholder="0XXXXXXXXX"
						>
					</div>
					<div class="contact-footer__form-inputline" :class="{'active': emailFocus, 'wrong': !valid.email}">
						<label for="email">E-mail</label>
						<input
							type="text"
							id="email"
							v-model="email"
							@focus="emailFocus = true"
							@blur="emailFocus = false"
						>
					</div>
					<div class="contact-footer__form-checkbox">
						<label class="contact-footer__form-checkbox--label" @click.prevent="agree = !agree">
							<span class="checkbox-mask" :class="{'checked': agree, 'focused': checkboxFocus}"></span>
							<input type="checkbox" v-model="agree" @focus="checkboxFocus = true" @blur="checkboxFocus = false">
							I agree the processing of personal data
						</label>
					</div>
					<button
							class="contact-footer__form-btn"
							:class="{'disabled': disabledButton}"
							@click.prevent="sendFormData"
					>get in touch</button>
				</form>
				<div class="contact-footer__desc">
					Please tell us more about your request and give us info about your company and country
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { emailTest, telTest, nameTest } from '~/helpers/validators'
	import { sendData } from '~/api/contacts'

	export default {
		name: 'contact-footer',
		data () {
			return {
				name: '',
				nameFocus: false,
				phone: '',
				phoneFocus: false,
				email: '',
				emailFocus: false,
				checkboxFocus: false,
				agree: false,
				firstAttemptSending: true
			}
		},
		methods: {
			sendFormData () {
				if (this.firstAttemptSending) this.firstAttemptSending = false;
				if (this.disabledButton) return false;
				let params = {
					name: this.name,
					phone: this.phone,
					email: this.email
				};
				sendData(params)
					.then(({data}) => {
						console.log(data);
					})
					.catch(error => {
						console.log(error);
					})
			},
			isEmptyString (str) {
				return str.trim().length === 0
			}
		},
		computed: {
			valid () {
				return {
					name: this.firstAttemptSending ? true : !this.isEmptyString(this.name) && nameTest.test(this.name),
					phone: this.firstAttemptSending ? true : !this.isEmptyString(this.phone) && telTest.test(this.phone),
					email: this.firstAttemptSending ? true : !this.isEmptyString(this.email) && emailTest.test(this.email)
				}
			},
			disabledButton () {
				return !this.agree || Object.values(this.valid).some(item => item === false)
			}
		}
	}
</script>
<style lang="scss">
	@import "~assets/scss/base/all";
	@import "~assets/scss/components/contact-footer";
</style>