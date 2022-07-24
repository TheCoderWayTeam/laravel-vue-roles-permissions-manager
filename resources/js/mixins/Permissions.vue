<script>
  export default {
    methods: {
      $can(permissionName) {
        return this.$store.state.auth.user.cando.indexOf(permissionName) !== -1;
      },
    },
  };
</script>