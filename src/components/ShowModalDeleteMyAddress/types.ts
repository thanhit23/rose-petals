export interface ModalDeleteTypes {
  openModal: boolean;
  handleCloseModal: () => void;
  selectDataDelete: { id: string; address: string };
}
