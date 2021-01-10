<template>
    <div>
        <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            v-if="showModal">
            <div class="relative mx-auto max-w-2xl">
                <div class="bg-white w-2/3 mx-auto">
                    Eiusmod non voluptate ex aliquip Lorem officia incididunt anim mollit exercitation.

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
            }
        }
    }
</script>
<style scoped>

</style>