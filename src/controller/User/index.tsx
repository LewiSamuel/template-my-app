// import structure
import axios from 'axios';

// TYPE MODEL
import iUser from '../../models/User';


// final Class
class User {

        // METHOD INSERT
        public async save(user: iUser){
            // get fields
            const { Name,Email,Password,Telefone,Obs,DataNasc,isAdmin,Linkedin } = user;

            // create Form Data
            const fdUser = new FormData();
            fdUser.append("Name",     Name || "");
            fdUser.append("Email",    Email || "");
            fdUser.append("Password", Password || "");
            fdUser.append("Telefone", Telefone || "");
            fdUser.append("Obs",      Obs || "");
            fdUser.append("DataNasc", DataNasc || "");
            fdUser.append("isAdmin",  isAdmin || "");
            fdUser.append("Linkedin", Linkedin || "");

            const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/user/save", fdUser)
            .then(result => {return result.data})
            .catch(err => {return err.response.data});
            console.log(result)
            return result;
        }

        // METHOD INSERT
        public async auth(user: iUser){
            // get fields
            const {Email,Password} = user;

            // create Form Data
            const fdUser = new FormData();
            fdUser.append("Email",    Email || "");
            fdUser.append("Password", Password || "");

            const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/user/auth", fdUser)
            .then(result => {return result.data})
            .catch(err => {return err.response.data});
            console.log(result)
            return result;
        }
}
export default User;