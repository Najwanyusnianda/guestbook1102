<template>
    <div class="w-2/3 mx-auto ">
        <h1 class="text-center text-gray-500 font-black"> Form Buku Tamu </h1>
        <div class="bg-white shadow-md  w-2/3 mx-auto  py-10 px-5 md:px-10 ">
            <div class="items-center">
                <div class="flex -mx-3">
                    <div class="w-2/3 px-3 mb-5 mx-auto ">
                        <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 "> Nama Depan</label>
                        <div class="flex">
                            <!--<div class="w-10 z-10 pl-1 text-center pointer-events-none items-center justify-center">
                            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>-->
                            <input type="text" name="nama_depan" placeholder="Nama depan"
                                class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                        </div>

                    </div>

                                            <div class="w-2/3 px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 "> Nama
                                Belakang</label>
                            <div class="flex">
                                <!--<div class="w-10 z-10 pl-1 text-center pointer-events-none items-center justify-center">
                            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>-->
                                <input type="text" name="nama_depan" placeholder="Nama Belakang"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500">
                            </div>

                        </div>

                </div>

                <div class="flex -mx-3">



                </div>
            </div>
        </div>


        <div class="bg-white shadow-md  my-5 px-4 py-4 rounded-lg">
            <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                <thead class="bg-gray-50 ">
                    <tr class="">
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
                    <guest-item v-for="(customer) in customers" :key="customer.id" :customer="customer">

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
                }, 
                 {
                    id:3,
                    nama_depan: 'Najwan3',
                    nama_belakang: ' Yusnianda',
                    instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                    status:'menunggu',
                } 
            ]
        }
    },

}
</script>