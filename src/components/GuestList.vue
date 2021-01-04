<template>
    <div class="w-2/3 mx-auto">
<div class="bg-white shadow-md rounded my-5">
    <table class="w-full text-left">
        <thead>
            <tr class="bg-gray-50" >
                <th class="text-gray-600 py-4 px-6 border-light-gray  border-2 font-bold ">
                    Nama Lengkap
                </th>
                <th class="py-4 px-6 border-light-grey  border-2 font-bold ">
                    Instansti
                </th>
                <th class="py-4 px-6 border-light-grey  border-2 font-bold ">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <guest-item v-for="(customer) in customers" :key="customer.id" :customer="customer" >

            </guest-item>
        </tbody>
    </table>
</div>
    </div>
</template>

<script>
import GuestItem from '../components/GuestItem'

export default {
    name:'GuestList',
    components:{
        GuestItem
    },
    data(){
        return {
            customers:[
                {
                    id:1,
                    nama_depan: 'Najwan',
                    nama_belakang: ' Yusnianda',
                    instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                    status:'menunggu',
                    
                },
                {
                    id:2,
                    nama_depan: 'Najwan2',
                    nama_belakang: ' Yusnianda',
                    instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                    status:'menunggu',
                }  
            ]
        }
    },

}
</script>