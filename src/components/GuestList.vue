<template>
    <div class="md:w-2/3 min-w-full mx-auto  bg-gray-100 ">
        <section class=" h-screen flex">
            <div class="m-auto pb-10 pb-10  ">
                <button
                    class="bg-blue-600 text-white font-light p-3 px-4 rounded-lg shadow-md  mx-auto hover:bg-blue-800 focus:outline-none"
                    @click="toggleModal">
                    <span class="pr-1">
                        <font-awesome-icon :icon="icons.faUserPlus" size="1x" />
                    </span>
                    Isi Buku Tamu
                </button>
            </div>
        </section>

        <modal :showModal="showModal" v-on:closeModal="closeModal" :steps="step" v-on:nextStep="nextStepping">

            <guest-form :steps="step"/>
        </modal>
        <section class=" min-w-full">
            <div class="bg-white md:w-2/3  mx-auto my-5 px-1  py-4 rounded-lg overflow-x-auto h-screen ">

                <div class="flex justify-center pb-3 pt-3 ">

                    <h1 class=" font-semibold text-gray-600">
                        Daftar Tamu Hari ini
                    </h1>
                </div>
                <hr>
                <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                    <thead class="bg-gray-50 ">
                        <tr class="">
                            <th
                                class="px-6 py-3 text-xs md:text-sm font-medium tracking-wider text-left text-gray-500 uppercase">
                                Nama Lengkap
                            </th>
                            <th
                                class="px-6 py-3 text-xs md:text-sm  font-medium tracking-wider text-left text-gray-500 uppercase ">
                                Instansti
                            </th>
                            <th
                                class="px-6 py-3 text-xs md:text-sm  font-medium tracking-wider text-left text-gray-500 uppercase ">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <guest-item v-for="(customer) in customers" :key="customer.id" :customer="customer">

                        </guest-item>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
    import GuestItem from '../components/GuestItem';
    import Modal from '../components/Modal';
    import GuestForm from '../components/GuestForm';

    //import fontawesome icon
    import {
        FontAwesomeIcon
    } from '@fortawesome/vue-fontawesome'
    import {
        faUserPlus
    } from '@fortawesome/free-solid-svg-icons'


    export default {
        name: 'GuestList',
        components: {
            GuestItem,
            FontAwesomeIcon,
            Modal,
            GuestForm
        
        },
        computed:{
            customers(){
                    return this.$store.state.customers
                },
            step(){
                return this.$store.state.form_step
            }    
        },
        data() {
            return {
                icons: {
                    faUserPlus: faUserPlus
                },
                showModal:false,
 
            }
        },
        methods: {
            toggleModal() {
                 this.showModal = !this.showModal
                console.log(this.showModal)
               
            },
            closeModal(){
                this.showModal= false
                   this.$store.dispatch('resetStep')
            },
            nextStepping(step){
                this.step=step
            }
        },
        mounted(){
            console.log(this.showModal)
        }

    }
</script>