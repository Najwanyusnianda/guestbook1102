<template>
    <div class="w-2/3">
                <h1 class="text-center text-gray-600 font-black"> Form Buku Tamu </h1>
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
                                class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500">
                        </div>

                    </div>

                    <div class="w-2/3 px-3 mb-5 mx-auto ">
                        <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                            Nama Belakang
                        </label>
                        <div class="flex">
                            <input type="text" name="nama_belakang" placeholder="Nama Belakang" class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                        </div>
                    </div>

                </div>

                <div class="flex -mx-3">
                    <div class="w-full px-3 mb-5 mx-auto ">
                        <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                            Kebutuhan Data
                        </label>
                        <div class="flex">
                            <input type="text" name="data_ket" placeholder="Kebutuhan data" class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>