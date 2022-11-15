import { redirect } from "react-router-dom";
import { deleteContact} from "../contacts";

export async function action({ params }) {
    await deleteContact(params.contactId);
    //throw new Error("error occured while deleting data");
    return redirect("/");
}