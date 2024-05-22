<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import { useToast } from "primevue/useToast";
// import Toast from 'primevue/toast';
// import ConfirmDialog from 'primevue/confirmdialog';
import { useToast } from "@mosaic-design-system/components-vue/api/usetoast";
import { useConfirm } from "@mosaic-design-system/components-vue/api/useconfirm";

const toast = useToast();

const confirm = useConfirm();

const showToast = () => {
  console.log('showToast', toast);
  toast.add({ severity: 'info', summary: 'Success', detail: 'Message Content', life: 3000000 });
};


const confirm1 = () => {
  confirm.require({
    message: 'Are you sure you want to proceed?',
    header: 'Confirmation',
    icon: 'mds-i mds-i-info',
    rejectLabel: 'Cancel',
    acceptLabel: 'Save',
    rejectClass: 'mds-button--outlined',
    acceptClass: 'mds-button--success',
    accept: () => {
      toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
  });
};
</script>

<template>
  <header>
    <div class="wrapper">
    </div>

  <Card>
    <template #title>Title</template>
    <template #subtitle>Sub title</template>
    <template #body>
      <Badge value="2"></Badge>
      <!-- <Toast /> -->
      <Button @click="showToast">Show Toast</Button>
      <Button @click="confirm1" label="Save" severity="success"></Button>
      <p class="mu-mb-00">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.........
      </p>
    </template>
  </Card>
  </header>
  <Toast />
  <ConfirmDialog />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
