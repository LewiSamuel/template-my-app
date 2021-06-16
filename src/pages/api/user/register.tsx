// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import FormData from 'form-data';

type Data = {
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
        const formDataTEste = new FormData();
        formDataTEste.append("Name", "Teste 123");
        formDataTEste.append("Email", "arroba.lewi@gmail.com");
        formDataTEste.append("Password", "123");
        formDataTEste.append("Telefone", "123");
        formDataTEste.append("Obs", "123");
        formDataTEste.append("DataNasc", "1");
        formDataTEste.append("isAdmin", "23");
        formDataTEste.append("Linkedin", "123");

        const result = await axios.post('http://localhost:5000/teste', formDataTEste, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((result) => {
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err.response)
        });
}
