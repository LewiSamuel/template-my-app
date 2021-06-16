// import structure
import axios from 'axios';

// TYPE MODEL
import iUser from '../../models/User';


// final Class
class UserRegister {

    // METHOD INSERT
    public async register(user: iUser){
        console.log(user, process.env.NEXT_PUBLIC_API_URL);

        return await axios.post("/api/user/register", user)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

}
export default UserRegister;