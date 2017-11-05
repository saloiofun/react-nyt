import axios from 'axios'
const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='
const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'

export default {
  search: function (topic, startYear, endYear) {
    return axios.get(BASEURL + APIKEY + '&q=' + topic + '&begin_date=' + startYear + '0101&end_date=' + endYear + '0101')
  }
}
