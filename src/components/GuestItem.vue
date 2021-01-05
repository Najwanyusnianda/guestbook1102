<template>
    
        
    <tr class="hover:bg-grey-lighter border-b border-1 ">
        <td class="py-4 px-6 ">
            {{customer.nama_depan}} {{customer.nama_belakang}}
        </td>
        <td>
            {{customer.instansi}}
        </td>
        <td>
            <a href="#" class="px-6 py-2 mx-2 text-xs font-medium leading-6 text-center text-white transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">Edit</a>
            <a href="#" class="px-6 py-2 text-xs font-medium leading-6 text-center text-white transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">View</a>
        </td>
    </tr>
    

</template>

<script>
export default {
    name:'guest-item',
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