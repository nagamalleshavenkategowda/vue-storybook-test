<script setup>
import { useToast } from "@mosaic-design-system/components-vue/api/usetoast";
import { useConfirm } from "@mosaic-design-system/components-vue/api/useconfirm";
// import {useToast} from 'primevue/usetoast';
// import { useToast } from '#imports';

const toast = useToast();
const confirm = useConfirm();

const showToast = () => {
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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="showToast">Show Toast</Button>
    <Button @click="confirm1" label="Save" severity="success"></Button>
  </div>
  <!-- <Toast /> -->
  <ConfirmDialog />
</template>