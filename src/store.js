import { reactive } from 'vue';

// Tiny shared UI store
export const ui = reactive({
  aboutOpen: false,
  detailModalOpen: false,
  activeDetailItem: null, // holds the object to display
});

// About Modal
export function openAbout() {
  if (ui.aboutOpen) return;
  ui.aboutOpen = true;
  try {
    history.pushState({ aboutDeep: true }, '');
  } catch (_) {}
}

export function closeAbout() {
  if (!ui.aboutOpen) return;
  if (history.state && history.state.aboutDeep) {
    history.back();
  } else {
    ui.aboutOpen = false;
  }
}

// Detail Modal
export function openDetail(item) {
  ui.activeDetailItem = item;
  ui.detailModalOpen = true;
  document.body.style.overflow = 'hidden';
}

export function closeDetail() {
  ui.detailModalOpen = false;
  setTimeout(() => {
    if (!ui.detailModalOpen) ui.activeDetailItem = null;
  }, 300); // clear after animation
  document.body.style.overflow = '';
}
