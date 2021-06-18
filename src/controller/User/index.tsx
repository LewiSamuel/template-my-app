// import structure
import axios from 'axios';
import Session from '../../lib/Session';

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
            return result;
        }


         // METHOD INSERT
         public async list(user: iUser){
            // get fields
            const { Name,Email,Password,Telefone,Obs,DataNasc,isAdmin,Linkedin } = user;
            const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2EzMWEwMTE1OGNkMzNhODAyMmFlMyIsImlhdCI6MTYyMzg2MzcxMn0.4ZWStgPBEIGVXP57wPblE9NdRW-ljmd_7vddYd90V9E";

            // create Form Data
            const fdUser = new FormData();

            const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/user/list", fdUser, {headers: {Authorization: token}})
            .then(result => {return result.data})
            .catch(err => {return err.response.data});
            return result;
        }
}
export default new User();