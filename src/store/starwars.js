// import axios from 'axios'
//
// export default  {
//     namespaced: true,
//     state: {
//         filmsData: []
//     },
//     actions: {
//         async getFilmsData({commit}) {
//             try {
//                 const { data: { results: films } } = await axios.get('https://swapi.co/api/films/');
//                 console.log('films==>', films);
//                 commit('setFilmsData', films);
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//
//     },
//     mutations: {
//         setFilmsData(state, value) {
//             state.filmsData = value;
//         }
//     }
// }