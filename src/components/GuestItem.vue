<template>
    
        
    <tr class="hover:bg-grey-lighter border-b border-1 ">
        <td class="py-4 px-6 ">
            {{customer.nama_depan}} {{customer.nama_belakang}}
        </td>
        <td>
            {{customer.instansi}}
        </td>
        <td>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a>
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