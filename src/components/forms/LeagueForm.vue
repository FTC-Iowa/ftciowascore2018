<!--
Fields:
    Name: string
    Location: string
    Administrator: string
    ContactInfo: string
    Teams: [number]
-->




<template>
    <form class="md-layout" novalidate @submit.prevent="validateForm">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
            <md-card-header>
                <div class="md-title">League</div>
            </md-card-header>

            <md-card-content>
                <md-field>
                    <label for="name" :class="getValidationClass('name')">Name</label>
                    <md-input type="text" name="name" id="name" v-model="form.name" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.name.required">Name is required</span>
                </md-field>
                <md-field :class="getValidationClass('location')">
                    <label for="location">Location</label>
                    <md-input type="text" name="location" id="location" v-model="form.location" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.location.required">Location is required</span>
                </md-field>
                <md-field :class="getValidationClass('administrator')">
                    <label for="administrator">Administrator</label>
                    <md-input type="text" name="administrator" id="administrator" v-model="form.administrator" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.administrator.required">Administrator is required</span>
                </md-field>
                <md-field :class="getValidationClass('email')">
                    <label for="email">Admin Email</label>
                    <md-input type="text" name="email" id="email" v-model="form.email" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.email.required">Email is required</span>
                    <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                </md-field>

                
            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Submit</md-button>
            </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="formSaved">The league {{ savedName }} was saved with success!</md-snackbar>
    </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {
    required,
    email,
    minLength
} from 'vuelidate/lib/validators'

import {db} from '../../main'

export default {
    name: 'LeagueForm',
    mixins: [validationMixin],
    data: () => ({
        form: {
            name: null,
            location: null,
            administrator: null,
            email: null,
            teams: []
        },
        formSaved: false,
        sending: false,
        savedName: null
    }),
    validations: {
        form: {
            name: {
                required
            },
            location: {
                required
            },
            administrator: {
                required
            },
            email: {
                required,
                email
            }
        }
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName];

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset();
            this.form.name = null;
            this.form.location = null;
            this.form.administrator = null;
            this.form.email = null;
        },
        saveForm () {
            this.sending = true;

            // save here...
            db.collection('leagues').add(this.form).then(ref => {
                console.log("added document with ID: ", ref.id);
                this.savedName = this.form.name;
                //this.clearForm();
                this.sending = false;

            })


        },
        validateForm () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveForm();
            }
        }
    }
}
</script>

<style>

</style>
