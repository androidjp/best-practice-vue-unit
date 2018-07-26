<template>
  <div>
    <div id="callback-label">
      <p><span style="font-weight: bold">{{label.from}}</span> to <span style="font-weight: bold">{{label.to}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PopupPage',
    props: ['label'],
  };
</script>

<style scoped>

</style>
