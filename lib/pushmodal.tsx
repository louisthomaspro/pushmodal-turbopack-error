"use client"

import ModalExample from "@/components/ui/ModalExample";
import { createPushModal } from "pushmodal";

export const {
  pushModal,
  popModal,
  popAllModals,
  replaceWithModal,
  useOnPushModal,
  onPushModal,
  ModalProvider,
} = createPushModal({
  modals: {
    // Short hand
    ModalExample,
    // SheetExample,

    // Longer definition where you can choose what wrapper you want
    // Only needed if you don't want `Dialog.Root` from '@radix-ui/react-dialog'
    // shadcn drawer needs a custom Wrapper
    // DrawerExample: {
    //   Wrapper: Drawer,
    //   Component: DrawerExample,
    // },
  },
});
