import css from "./HomePage.module.css";
import { MdImportContacts } from "react-icons/md"; 

export default function Home() {
  return (
      <div className={css.container}>
        <h1 className={css.title}>Welcome!</h1>
        <p className={css.desc}>It's secure storage of your contacts</p>
        <MdImportContacts className={css.icon} />
      </div>
  );
}