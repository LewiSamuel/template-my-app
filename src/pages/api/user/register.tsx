// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import FormData from 'form-data';

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // get fields
  const { Name,Email,Password,Telefone,Obs,DataNasc,isAdmin,Linkedin } = req.body;

  // create Form Data
  const fdUser = new FormData();
  fdUser.append("Name",     Name);
  fdUser.append("Email",    Email);
  fdUser.append("Password", Password);
  fdUser.append("Telefone", Telefone);
  fdUser.append("Obs",      Obs);
  fdUser.append("DataNasc", DataNasc);
  fdUser.append("isAdmin",  isAdmin);
  fdUser.append("Linkedin", Linkedin);

  const resultado = await axios.post('http://localhost:3333/user/save', fdUser, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then((result) => { return result.data })
  .catch((err) => { return err; });
  
  res.status(200).send(resultado)
  return resultado;
}
