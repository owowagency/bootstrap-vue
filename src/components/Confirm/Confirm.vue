<template>
    <Modal
        title="Confirm"
        body="You are about to do something that requires confirmation. Do you wish to continue?"
    >
        <template #footer>
            <Btn
                data-bs-dismiss="modal"
                variant="light"
            >
                Cancel
            </Btn>

            <Btn variant="danger">
                Confirm
            </Btn>
        </template>
    </Modal>
</template>

<script lang="ts" setup>
import Btn from '@/components/Button';
import Modal from '@/components/Modal';
</script>
