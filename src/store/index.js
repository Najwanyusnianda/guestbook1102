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
        form_step: 1,
        is_institution: false
    },
    mutations: {
        nextStep(state) {

            if (state.is_institution) {
                switch (state.form_step) {
                    case 1:
                        state.form_step = 2;
                        break;
                    case 2:
                        state.form_step = 3;
                }
            } else {
                state.form_step = 3
            }

        },
        prevStep(state) {
            if (state.is_institution) {
                switch (state.form_step) {
                    case 2:
                        state.form_step = 1;
                        break;
                    case 3:
                        state.form_step = 2;
                }
            } else {
                state.form_step = 1
            }

        },
        resetStep(state) {
            state.form_step = 1;
        },
        changeInstitution(state, status) {
            state.is_institution = status
        }
    },
    actions: {
        nextStep(context) {
            context.commit('nextStep')
        },
        prevStep(context) {
            context.commit('prevStep')
        },
        resetStep(context) {
            context.commit('resetStep')
        },
        changeInstitution({commit},data) {
            commit('changeInstitution', data)
        }

    },
    getters: {

    },
    modules: {}
})