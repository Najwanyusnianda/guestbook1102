<template>
    <div>
        <div class="table w-full">
            <div class="table-row">
                <div class="table-cell">Nama Lengkap</div>
            </div>
            <div class="table-row" v-for="customer in customers" :key="customer.id">
                 <div class="table-cell font-bold">{{customer.nama_depan}} {{customer.nama_belakang}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'GuestList',
    data(){
        return {
            customers:[
                {
                    id:1,
                    nama_depan: 'Najwan',
                    nama_belakang: ' Yusnianda',

                }
            ]
        }
    },

}
</script>