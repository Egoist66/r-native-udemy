import { useState } from "react";

export const useModal = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(open => !open);
    }

    const close = () => {
        setOpen(false);
    }

    const openModal = () => {
        setOpen(true);
    }

    return {
        toggle,
        open,
        close,
        openModal,
    }
}