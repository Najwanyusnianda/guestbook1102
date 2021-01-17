<template>
    <div>
        <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            v-if="showModal">
            <div class="relative mx-auto w-auto shadow-lg ">
                <div class="bg-white  mx-auto px-4 py-5 rounded-md ">
                      <slot></slot>
                    <div class="footer flex justify-center">
                        <hr>
                      
                        <button class="px-2 py-2 mt-2 -mb-4 text-sm mr-2 text-green-500 border-1 transition duration-300 ease-in border-green-500 hover:bg-green-500 hover:text-white rounded-md focus:outline-none" @click="nextStep(steps)" v-if="steps==1"> Selanjutnya</button>
                        <button class="px-2 py-2 mt-2 -mb-4 text-sm mr-2 text-green-500 border-1 transition duration-300 ease-in border-green-500 hover:bg-green-500 hover:text-white rounded-md focus:outline-none" @click="prevStep(steps)" v-if="steps!=1"> Sebelumnya</button>
                        <button class="px-2 py-2 mt-2 -mb-4 text-sm ml-2 text-red-500 border-1 transition duration-300 ease-in border-red-500 hover:bg-red-500 hover:text-white rounded-md focus:outline-none"  @click="closeModal"> Tutup</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="absolute z-40 inset-0 opacity-25 bg-black">
       
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            showModal: {
                type: Boolean,
                required: true
            },
            steps:{
                type:Number,
                required:true
            }
        },
        data(){

        },

        methods:{
            closeModal:function(){
                this.$emit('closeModal');
            },

            nextStep:function(step){
                this.$store.dispatch('nextStep')
                //this.step=++step;
                //console.log('step '+this.step)
                //this.$emit('nextStep',this.step);
            },
            prevStep:function(step){
                 this.$store.dispatch('prevStep')

            }
        }
    }
</script>
<style scoped>

</style>