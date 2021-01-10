<template>
    <div class="" id="form_guest">
        <h1 class="text-center text-gray-600 font-black"> Form Buku Tamu {{ steps }} </h1>
        <form action="">
            <div class="bg-white mx-auto  py-10 px-5 md:px-10 ">
                <div class="step" v-if="steps==1 ">
                <div class="w-full max-h-10 flex bg-gray-400 rounded py-2 px-3 text-white font-medium "> 
                    <span class="mx-auto font-medium tracking-wider uppercase">Identitas diri</span>
                </div>
                <div class="items-center">
                    <div class="flex -mx-3">
                        <div class="w-2/3 px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 "> Nama
                                Depan</label>
                            <div class="flex">
                                <!--<div class="w-10 z-10 pl-1 text-center pointer-events-none items-center justify-center">
                            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>-->
                                <input type="text" name="nama_depan" placeholder="Nama depan" v-model="guest.nama_depan"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500">
                            </div>

                        </div>

                        <div class="w-2/3 px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Nama Belakang
                            </label>
                            <div class="flex">
                                <input type="text" name="nama_belakang" placeholder="Nama Belakang"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400"
                                    v-model="guest.nama_belakang">
                            </div>
                        </div>

                    </div>

                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Email
                            </label>
                            <div class="flex">
                                <input type="email" name="data_ket" placeholder="Email"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                            </div>
                        </div>
                    </div>

                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 "> Jenis
                                Kelamin</label>
                            <div class="flex flex-row mt-1 ">
                                <div class="mr-2 ml-1 flex my-auto">
                                    <input type="radio" name="jenis_kelamin"
                                        class="  pl-3   pr-3 py-2 mt-1.5  text-green-600">
                                    <span class="pl-3   pr-3  ">Laki laki</span>
                                </div>
                                <div class="ml-2 flex my-auto">
                                    <input type="radio" name="jenis_kelamin"
                                        class="  pl-3   pr-3 py-2 mt-1.5 text-green-600">
                                    <span class="pl-3   pr-3  ">Perempuan</span>
                                </div>


                            </div>

                        </div>


                    </div>


                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Jenis Pengunjung
                            </label>
                            <div class="flex">
                                <select v-model="guest.tipe_pengunjung" name="" id=""
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400"
                                    @change="guestTypeEvent($event)">
                                    <option :value="null" disabled selected>Pilih jenis pengunjung</option>
                                    <option value="1">Instansi/Lembaga Pemerintah (Pusat/Daerah)</option>
                                    <option value="2">Instansi Swasta</option>
                                    <option value="3">Lembaga Internasional/Perwakilan Negara Asing</option>
                                    <option value="4">Lembaga/Institusi Pendidikan</option>
                                    <option value="5">Peneliti, Mahasiswa, atau Pribadi Lainnya</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                </div>

                <div class="step" v-if="guest.is_institution && steps==2 " >
                 <div class="w-full max-h-10 flex bg-gray-400 rounded py-2 px-3 text-white font-medium mt-5 "> 
                    <span class="mx-auto font-medium tracking-wider uppercase">Identitas Segmentasi</span>
                </div>
                <div class="items-center">
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Institusi Pengguna
                            </label>
                            <div class="flex">
                                <input type="text" name="data_ket" placeholder="Email"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                            </div>
                        </div>
                    </div>

                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Jabatan Pengguna
                            </label>
                            <div class="flex">
                                <input type="text" name="data_ket" placeholder="Jabatan Pengguna"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                            </div>
                        </div>
                    </div>

                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 mx-auto ">
                            <label for="nama_depan" class="text-xs font-semibold px-1 text-gray-600 ">
                                Alamat Institusi
                            </label>
                            <div class="flex">
                                <textarea type="text" name="data_ket" placeholder="Alamat Institusi" rows="3"
                                    class="w-full flex pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-400">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>                   
                </div>

            </div>
        </form>

    </div>
</template>
<script>
    export default {
        name: 'guest-form',
        props:{
            steps:{
                type:Number,
                required:true
            }
      },
        data() {
            return {
                guest: {
                    nama_depan: '',
                    nama_belakang: '',
                    tipe_pengunjung: '',
                    is_institution: false,

                },
                

            }
        },
        methods: {
            guestTypeEvent(event) {
                console.log(event.target.value);
                if (this.guest.tipe_pengunjung != 5) {
                    this.guest.is_institution = true
                } else {
                    this.guest.is_institution = false
                }
            },


        }

    }
</script>