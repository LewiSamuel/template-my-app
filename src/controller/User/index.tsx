// import structure
import axios from 'axios';

// TYPE MODEL
import iUser from '../../models/User';


// final Class
class User {

    // METHOD INSERT
    public async register(user: iUser){
        console.log(user, process.env.NEXT_PUBLIC_API_URL);
        const fdUser = new FormData();
        fdUser.append("Name",     "Name");
        fdUser.append("Email",    "Email");

        const result = await axios.post("http://localhost:3333/teste", fdUser)
        .then(result => {console.log("teste123", result); return result.data})
        .catch(err => console.log(err))
        console.log("teste4", result)
        return result;
    }

}
export default User;