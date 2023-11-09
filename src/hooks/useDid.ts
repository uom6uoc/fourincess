import axios from 'axios';
import { BASE_API_URL } from '~/app/config';
import { API_TOKEN, CHAIN } from '~/app/constant';

const useDid = () => {
  const verificateDid = ({
    templateId,
    jwt,
  }: {
    templateId: string;
    jwt: string;
  }) => {
    return axios.post(`${BASE_API_URL}/did/verification`, {
      token: API_TOKEN,
      chain: CHAIN,
      template_id: templateId,
      jwt,
    });
  };

  return { verificateDid };
};

export default useDid;
