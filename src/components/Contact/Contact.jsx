import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


import { RiAccountPinCircleFill } from "react-icons/ri";

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contact}>
    <RiAccountPinCircleFill className={css.icon}  />
      <p className={css.contactName}>{name}</p>
      <p className={css.contactNumber}>{number}</p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(handleDelete)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;