<template>
    
        
    <tr class="hover:bg-grey-lighter border-b border-1 text-xs md:text-sm">
        <td class="py-4 px-6 ">
            {{customer.nama_depan}} {{customer.nama_belakang}}
        </td>
        <td>
            {{customer.instansi}}
        </td>
        <td class="">
           <!-- <a href="#" class=" inline-block pr-6 py-2 mx-2 text-xs font-medium leading-6 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">     
                  <span class="pl-4 pr-1">
                    <font-awesome-icon :icon="icons.faPencilAlt" size="1x"  />
                  </span>
                    Edit
            </a>
            <a href="#" class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">View</a>
                -->
        </td>
    </tr>
    

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


export default {
    name:'guest-item',
    components:{
      
    },
    data(){
        return{
            icons:{
                faPencilAlt:faPencilAlt
            }

        }
    },
    props:{
        customer:{
            Object:{
                type:Object,
                required:true
            }
        }

    }
}
</script>