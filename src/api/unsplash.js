import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID DlMI9Rjc-fTp61aRF5n5L8BYoGJDzN37IVhJuXa4jeM'
  }
});
