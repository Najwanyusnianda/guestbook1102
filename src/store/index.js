import { createStore } from 'vuex'

export default createStore({
    state: {
        customers: [{
                id: 1,
                nama_depan: 'Najwan',
                nama_belakang: ' Yusnianda',
                instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                status: 'menunggu',

            },
            {
                id: 2,
                nama_depan: 'Najwan2',
                nama_belakang: ' Yusnianda',
                instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                status: 'menunggu',
            },
            {
                id: 3,
                nama_depan: 'Najwan3',
                nama_belakang: ' Yusnianda',
                instansi: 'Badan Pusat Statistik Kabupaten Aceh Singkil',
                status: 'menunggu',
            }
        ],
        form_step: 1
    },
    mutations: {
        nextStep(state) {
            state.form_step++;
        },
        prevStep(state) {

            state.form_step--;
        },
        resetStep(state) {
            state.form_step = 1;
        }
    },
    actions: {},
    modules: {}
})