export interface ModalDeleteTypes {
  openModal: boolean;
  handleCloseModal: () => void;
  onDelete: () => void;
  content: string | React.JSX.Element;
}
