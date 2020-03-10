<template>
    <label>
        name :
        <input
            type="text"
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)" />
    </label>
</template>

<script>
export default {
    props: {
        value: {
            type:String,
            required:true,
        }
    },
}
</script>