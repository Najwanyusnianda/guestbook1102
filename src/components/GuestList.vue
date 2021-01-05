<template>
    <div class="w-2/3 mx-auto rounded-lg">
<div class="bg-white shadow-md  my-5">
    <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
        <thead class="bg-gray-50 ">
            <tr class="" >
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Nama Lengkap
                </th>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase ">
                    Instansti
                </th>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase ">
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