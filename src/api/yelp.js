import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer gu34KL6lG6Ym5Lep4GagvGmAvHtl1LYerQbiakS35LzMU00uRACESHHCc73RlYonr-e88eQ-IiAyPAIQmJEeXT_0RnqfMBjE6QH_Nu8oSJCzvssLW1DS5zoxUTBRXXYx'
  }
});
